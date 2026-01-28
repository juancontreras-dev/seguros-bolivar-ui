#!/usr/bin/env python3
"""
Script para eliminar bloques brand-controls de archivos HTML.
Elimina:
1. CSS de .brand-controls y clases relacionadas
2. HTML del div.brand-controls
3. JavaScript de brandSelect, lightBtn, darkBtn y funciones relacionadas
"""

import re
import os
import sys

# Lista de archivos a procesar
files_to_process = [
    "examples/calendar/datepicker.html",
    "examples/radio/index.html",
    "examples/input/index.html",
    "examples/alert/index.html",
    "examples/accordion/index.html",
    "examples/checkbox/index.html",
    "examples/stepper/index.html",
    "examples/spinner/index.html",
    "examples/toggle/index.html",
    "examples/form-demo.html",
    "examples/textarea/index.html",
    "examples/button/secondary.html",
    "examples/button/primary.html",
    "examples/button/error.html",
    "examples/table/index.html",
    "examples/select/index.html",
    "examples/breadcrumb/index.html"
]

def remove_css_block(content):
    """Elimina el bloque CSS de brand-controls"""
    
    # Patrones para eliminar CSS de brand-controls
    patterns = [
        # Patrón con comentario completo
        r'/\*\s*=+\s*BRAND & THEME CONTROLS\s*=+\s*\*/\s*\.brand-controls\s*\{[^}]+\}\s*\.brand-controls:hover\s*\{[^}]+\}\s*\.brand-controls-group\s*\{[^}]+\}\s*\.brand-controls\s+label\s*\{[^}]+\}\s*\.theme-toggle\s*\{[^}]+\}\s*@media[^{]+\{[^}]+\.brand-controls[^}]+\}[^}]+\.brand-controls-group[^}]+\}[^}]+\.theme-toggle[^}]+\}\s*\}',
        
        # Patrón simple
        r'/\*\s*Brand & Theme Controls\s*\*/\s*\.brand-controls\s*\{[^}]+\}\s*\.brand-controls:hover\s*\{[^}]+\}\s*\.brand-controls-group\s*\{[^}]+\}\s*\.brand-controls\s+label\s*\{[^}]+\}\s*\.theme-toggle\s*\{[^}]+\}\s*@media[^{]+\{[^}]+\.brand-controls[^}]+\}[^}]+\.brand-controls-group[^}]+\}[^}]+\.theme-toggle[^}]+\}\s*\}',
        
        # Patrón Modern UI
        r'/\*\s*Brand Selector Styles - Modern UI\s*\*/\s*\.brand-controls\s*\{[^}]+\}\s*\.brand-controls:hover\s*\{[^}]+\}\s*\.brand-controls-group\s*\{[^}]+\}\s*\.brand-controls\s+label\s*\{[^}]+\}\s*\.theme-toggle\s*\{[^}]+\}\s*@media[^{]+\{[^}]+\.brand-controls[^}]+\}[^}]+\.brand-controls-group[^}]+\}[^}]+\.theme-toggle[^}]+\}\s*\}',
    ]
    
    for pattern in patterns:
        content = re.sub(pattern, '', content, flags=re.DOTALL | re.IGNORECASE)
    
    return content

def remove_html_block(content):
    """Elimina el bloque HTML de brand-controls"""
    
    # Patrón para el bloque HTML completo
    pattern = r'<!-- Brand & Theme Controls -->\s*<div class="brand-controls">[\s\S]*?</div>\s*</div>\s*</div>\s*'
    content = re.sub(pattern, '', content)
    
    return content

def remove_js_block(content):
    """Elimina el JavaScript relacionado con brand/theme"""
    
    # Patrones para el JavaScript
    patterns = [
        # Bloque completo de brand/theme switching
        r'//\s*Brand and Theme Switching.*?updateBrandAndTheme\(\);',
        r'//\s*Referencias\s*const brandSelect.*?updateBrandAndTheme\(\);',
        r'const brandSelect = document\.getElementById\(\'brandSelect\'\);.*?updateBrandAndTheme\(\);',
    ]
    
    for pattern in patterns:
        content = re.sub(pattern, '', content, flags=re.DOTALL)
    
    return content

def clean_file_line_by_line(content):
    """Limpieza línea por línea para casos que no matchean con regex"""
    
    lines = content.split('\n')
    result_lines = []
    skip_mode = None
    brace_count = 0
    skip_html = False
    html_depth = 0
    
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Detectar inicio de CSS .brand-controls (no en HTML class=)
        if not skip_mode and '.brand-controls' in line and '{' in line and 'class=' not in line and '<' not in line:
            skip_mode = 'css'
            brace_count = line.count('{') - line.count('}')
            i += 1
            continue
        
        # Detectar comentarios de brand controls CSS
        if not skip_mode and ('BRAND & THEME CONTROLS' in line or 'Brand & Theme Controls' in line or 'Brand Selector Styles' in line):
            if '/*' in line:
                i += 1
                continue
        
        # Detectar .theme-toggle CSS
        if not skip_mode and '.theme-toggle' in line and '{' in line and 'class=' not in line and '<' not in line:
            skip_mode = 'css'
            brace_count = line.count('{') - line.count('}')
            i += 1
            continue
        
        # Si estamos saltando CSS, contar llaves
        if skip_mode == 'css':
            brace_count += line.count('{') - line.count('}')
            if brace_count <= 0:
                skip_mode = None
            i += 1
            continue
        
        # Detectar inicio de HTML brand-controls
        if '<!-- Brand & Theme Controls -->' in line or '<div class="brand-controls">' in line:
            skip_html = True
            html_depth = 1
            i += 1
            continue
        
        if skip_html:
            html_depth += line.count('<div')
            html_depth -= line.count('</div>')
            if html_depth <= 0:
                skip_html = False
            i += 1
            continue
        
        # Detectar inicio de JavaScript de brand switching
        if ('const brandSelect = document.getElementById' in line or 
            '// Brand and Theme Switching' in line or
            '// Referencias' in line and 'brandSelect' in lines[i+1] if i+1 < len(lines) else False):
            skip_mode = 'js'
            i += 1
            continue
        
        if skip_mode == 'js':
            if 'updateBrandAndTheme();' in line and '//' not in line:
                skip_mode = None
            i += 1
            continue
        
        result_lines.append(line)
        i += 1
    
    return '\n'.join(result_lines)

def process_file(filepath):
    """Procesa un archivo eliminando brand-controls"""
    
    if not os.path.exists(filepath):
        print(f"⚠️  No encontrado: {filepath}")
        return False
    
    with open(filepath, 'r', encoding='utf-8') as f:
        original_content = f.read()
    
    content = original_content
    
    # Aplicar limpieza con regex
    content = remove_css_block(content)
    content = remove_html_block(content)
    content = remove_js_block(content)
    
    # Si aún hay brand-controls, usar limpieza línea por línea
    if 'brand-controls' in content or '.theme-toggle' in content:
        content = clean_file_line_by_line(content)
    
    # Limpiar líneas vacías excesivas
    content = re.sub(r'\n{4,}', '\n\n\n', content)
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Modificado: {filepath}")
        return True
    else:
        print(f"ℹ️  Sin cambios: {filepath}")
        return False

def main():
    os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    
    modified_count = 0
    
    for filepath in files_to_process:
        if process_file(filepath):
            modified_count += 1
    
    print(f"\n📊 Total archivos modificados: {modified_count}")
    print(f"📊 Total archivos procesados: {len(files_to_process)}")

if __name__ == '__main__':
    main()
