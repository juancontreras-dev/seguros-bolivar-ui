#!/usr/bin/env python3
"""
Script para automatizar la configuración de Figma Code Connect
Seguros Bolívar UI Design System

Este script te ayuda a conectar componentes del repositorio con Figma.

Requiere:
- Python 3.8+
- Personal Access Token de Figma con permisos de Code Connect

Uso:
    python3 setup-code-connect.py --token YOUR_FIGMA_TOKEN
"""

import json
import argparse
from pathlib import Path

# Colores para la terminal
class Colors:
    GREEN = '\033[92m'
    RED = '\033[91m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    RESET = '\033[0m'
    BOLD = '\033[1m'

def print_header():
    """Imprime el header del script"""
    print(f"\n{Colors.CYAN}{Colors.BOLD}{'='*70}")
    print(f"  Seguros Bolívar UI - Figma Code Connect Setup")
    print(f"{'='*70}{Colors.RESET}\n")

def load_mappings():
    """Carga el archivo de mappings JSON"""
    mappings_path = Path(__file__).parent / "figma-code-connect-mappings.json"
    
    if not mappings_path.exists():
        print(f"{Colors.RED}❌ Error: No se encontró figma-code-connect-mappings.json{Colors.RESET}")
        return None
    
    with open(mappings_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def print_statistics(mappings):
    """Imprime estadísticas del Design System"""
    stats = mappings['statistics']
    
    print(f"{Colors.BOLD}📊 Estadísticas del Design System:{Colors.RESET}")
    print(f"   Total componentes: {Colors.CYAN}{stats['total']}{Colors.RESET}")
    print(f"   ├─ Atoms: {Colors.CYAN}{stats['atoms']}{Colors.RESET}")
    print(f"   ├─ Molecules: {Colors.CYAN}{stats['molecules']}{Colors.RESET}")
    print(f"   └─ Organisms: {Colors.CYAN}{stats['organisms']}{Colors.RESET}")
    print(f"\n   Implementados: {Colors.GREEN}✅ {stats['implemented']}{Colors.RESET}")
    print(f"   Faltantes: {Colors.RED}❌ {stats['missing']}{Colors.RESET}")
    
    if stats['missingComponents']:
        print(f"\n   {Colors.YELLOW}Componentes faltantes:{Colors.RESET}")
        for comp in stats['missingComponents']:
            print(f"     • {comp}")
    print()

def print_component_list(mappings):
    """Imprime la lista de componentes a conectar"""
    print(f"\n{Colors.BOLD}📋 Componentes a Conectar:{Colors.RESET}\n")
    
    # Atoms
    print(f"{Colors.BOLD}{Colors.BLUE}ATOMS ({len(mappings['mappings']['atoms'])} componentes):{Colors.RESET}")
    for atom in mappings['mappings']['atoms']:
        status_icon = "✅" if "✅" in atom['status'] else "❌"
        color = Colors.GREEN if status_icon == "✅" else Colors.RED
        print(f"  {status_icon} {atom['figmaComponent']:20s} → {color}{atom['source']}{Colors.RESET}")
    
    # Molecules
    print(f"\n{Colors.BOLD}{Colors.BLUE}MOLECULES ({len(mappings['mappings']['molecules'])} componentes):{Colors.RESET}")
    for molecule in mappings['mappings']['molecules']:
        status_icon = "✅" if "✅" in molecule['status'] else "❌"
        color = Colors.GREEN if status_icon == "✅" else Colors.RED
        print(f"  {status_icon} {molecule['figmaComponent']:30s} → {color}{molecule['source']}{Colors.RESET}")
    
    # Organisms
    organisms = mappings['mappings']['organisms']
    if organisms:
        print(f"\n{Colors.BOLD}{Colors.BLUE}ORGANISMS ({len(organisms)} componentes):{Colors.RESET}")
        for organism in organisms:
            print(f"  ✅ {organism['figmaComponent']:20s} → {organism['source']}")
    else:
        print(f"\n{Colors.BOLD}{Colors.BLUE}ORGANISMS: {Colors.YELLOW}(ninguno definido aún){Colors.RESET}")

def print_manual_instructions():
    """Imprime instrucciones manuales"""
    print(f"\n{Colors.BOLD}{Colors.CYAN}📖 Instrucciones para Conexión Manual:{Colors.RESET}\n")
    print("  1. Abre tu archivo de Figma en modo Dev (Dev Mode)")
    print("  2. Activa el panel 'Code Connect' en la barra lateral derecha")
    print("  3. Para cada componente:")
    print("     a. Selecciona el componente en la lista")
    print("     b. Click en 'Connect to code component'")
    print("     c. Ingresa la información según la tabla de arriba:")
    print("        • Path: La ruta del archivo (ej: packages/atoms/src/button.css)")
    print("        • Component name: El nombre del componente (ej: sb-ui-button)")
    print("        • Framework: CSS para atoms, TypeScript para molecules")
    print("     d. Guarda la conexión\n")
    print(f"  {Colors.YELLOW}💡 Tip: Usa la guía FIGMA_CODE_CONNECT_GUIDE.md para más detalles{Colors.RESET}\n")

def print_cli_instructions():
    """Imprime instrucciones para usar la CLI de Figma"""
    print(f"\n{Colors.BOLD}{Colors.CYAN}🚀 Automatización con CLI de Figma:{Colors.RESET}\n")
    print("  Próximamente: Integración con @figma/code-connect CLI")
    print("  Por ahora, usa la conexión manual o contacta al equipo de desarrollo.\n")

def generate_markdown_table():
    """Genera una tabla markdown con los componentes"""
    mappings = load_mappings()
    if not mappings:
        return
    
    output_path = Path(__file__).parent / "CODE_CONNECT_CHECKLIST.md"
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("# Checklist - Figma Code Connect\n")
        f.write("## Seguros Bolívar UI Design System\n\n")
        f.write(f"**Archivo Figma**: [{mappings['figmaFile']['name']}]({mappings['figmaFile']['url']})\n\n")
        f.write("---\n\n")
        
        f.write("## ✅ Atoms\n\n")
        f.write("| Estado | Componente | Ruta | Nombre Componente | Framework |\n")
        f.write("|--------|-----------|------|-------------------|------------|\n")
        
        for atom in mappings['mappings']['atoms']:
            status = "✅" if "✅" in atom['status'] else "❌"
            f.write(f"| {status} | {atom['figmaComponent']} | `{atom['source']}` | `{atom['componentName']}` | {atom['label']} |\n")
        
        f.write("\n## ✅ Molecules\n\n")
        f.write("| Estado | Componente | Ruta | Nombre Componente | Framework |\n")
        f.write("|--------|-----------|------|-------------------|------------|\n")
        
        for molecule in mappings['mappings']['molecules']:
            status = "✅" if "✅" in molecule['status'] else "❌"
            f.write(f"| {status} | {molecule['figmaComponent']} | `{molecule['source']}` | `{molecule['componentName']}` | {molecule['label']} |\n")
        
        f.write("\n---\n\n")
        f.write("## 📝 Instrucciones\n\n")
        f.write("Para conectar cada componente:\n\n")
        f.write("1. Abre Figma en Dev Mode\n")
        f.write("2. Ve al panel Code Connect\n")
        f.write("3. Selecciona el componente\n")
        f.write("4. Click 'Connect to code component'\n")
        f.write("5. Ingresa los datos de la tabla\n")
        f.write("6. Marca ✅ cuando termines\n\n")
        f.write("## ❌ Componentes Faltantes\n\n")
        
        for comp in mappings['statistics']['missingComponents']:
            f.write(f"- [ ] {comp}\n")
        
        f.write("\n---\n")
        f.write("\n*Generado automáticamente por setup-code-connect.py*\n")
    
    print(f"{Colors.GREEN}✅ Checklist generado en: {output_path}{Colors.RESET}\n")

def main():
    """Función principal"""
    parser = argparse.ArgumentParser(
        description='Setup Figma Code Connect para Seguros Bolívar UI'
    )
    parser.add_argument(
        '--token',
        help='Figma Personal Access Token (opcional, para automatización futura)',
        default=None
    )
    parser.add_argument(
        '--generate-checklist',
        action='store_true',
        help='Genera un archivo markdown con checklist de componentes'
    )
    
    args = parser.parse_args()
    
    print_header()
    
    # Cargar mappings
    mappings = load_mappings()
    if not mappings:
        return 1
    
    # Mostrar estadísticas
    print_statistics(mappings)
    
    # Generar checklist si se solicita
    if args.generate_checklist:
        generate_markdown_table()
        return 0
    
    # Mostrar lista de componentes
    print_component_list(mappings)
    
    # Mostrar instrucciones
    print_manual_instructions()
    
    if args.token:
        print(f"{Colors.YELLOW}⚠️  La automatización con API aún no está implementada.{Colors.RESET}")
        print(f"   Por ahora, usa la conexión manual en Figma.\n")
    else:
        print(f"{Colors.CYAN}💡 Tip: Ejecuta con --generate-checklist para crear un archivo markdown{Colors.RESET}")
        print(f"   con una lista de verificación que puedes marcar conforme conectas componentes.\n")
    
    print(f"{Colors.GREEN}✅ Setup completado. ¡Buena suerte conectando los componentes!{Colors.RESET}\n")
    
    return 0

if __name__ == "__main__":
    exit(main())
