// docmd.config.js
module.exports = {
  // --- Core Metadata ---
  siteTitle: 'SITGEQ - Sistema de Gestión de Quirófanos', // Main title of the site
  siteUrl: '', // e.g. https://mysite.com (Critical for SEO/Sitemap)
  basePath: '/docs/',

  // --- Branding ---
  logo: {
    light: 'assets/images/logo_sitgeq.png',
    dark: 'assets/images/logo_sitgeq.png',
    alt: 'Logo SITGEQ',
    href: '/',
  },
  favicon: 'assets/favicon.ico',

  // --- Source & Output ---
  srcDir: 'docs',
  outputDir: 'site',

  // --- Layout & UI Architecture (V2) ---
  layout: {
    spa: true, // Enable seamless page transitions (Single Page App behavior)
    header: {
      enabled: true,
    },
    sidebar: {
      collapsible: true,
      defaultCollapsed: false,
    },
    // Centralized Options Menu (Search, Theme, Sponsor)
    optionsMenu: {
      position: 'sidebar-top', // 'header', 'sidebar-top', 'sidebar-bottom'
      components: {
        search: true,      // Enable built-in offline search
        themeSwitch: true, // Enable light/dark toggle
        sponsor: null,     // e.g. 'https://github.com/sponsors/myname'
      }
    },
    // Footer Configuration
    footer: {
      style: 'minimal',    // 'minimal' or 'complete'
      content: '© ' + new Date().getFullYear() + ' [Gesnova Salud](https://www.gesnovasalud.com).',
      // For 'complete' style, you can add 'columns': [...] here.
    }
  },

  // --- Theme Settings ---
  theme: {
    name: 'default',        // Options: 'default', 'sky', 'ruby', 'retro'
    defaultMode: 'system',  // 'light', 'dark', or 'system'
    codeHighlight: true,    // Enable Highlight.js
    customCss: [],          // e.g. ['assets/css/custom.css']
  },

  // --- General Features ---
  minify: true,           // Minify HTML/CSS/JS in build
  autoTitleFromH1: true,  // Auto-generate page title from first H1
  copyCode: true,         // Show "copy" button on code blocks
  pageNavigation: true,   // Prev/Next buttons at bottom
  
  customJs: [],           // e.g. ['assets/js/custom.js']

  // --- Navigation (Sidebar) ---
  navigation: [
    { title: 'Inicio', path: '/', icon: 'home' },
    {
      title: 'Menú Principal',
      icon: 'menu',
      collapsible: true,
      collapsibleByDefault: false,
      children: [
        { title: 'Escritorio', path: '01-menu-principal/01_escritorio' },
        { title: 'Solicitudes', path: '01-menu-principal/02-solicitudes' },
        { title: 'Agenda Prequirúrgica', path: '01-menu-principal/03-agenda-prequirurgica' },
        { title: 'Encuentro Prequirúrgico', path: '01-menu-principal/04-encuentro-prequirurgico' },
        { title: 'Agenda Quirúrgica', path: '01-menu-principal/05-agenda-quirurgica' },
        { title: 'Encuentro Quirúrgico', path: '01-menu-principal/06-encuentro-quirurgico' },
        { title: 'Encuentro Postquirúrgico', path: '01-menu-principal/07-encuentro-postquirurgico' },
      ],
    },
    {
      title: 'Monitores',
      icon: 'monitor',
      collapsible: true,
      children: [
        { title: 'Monitor Quirófano', path: '02-monitores/01-monitor-quirofano' },
        { title: 'Monitor Sala Espera', path: '02-monitores/02-monitor-sala-espera' },
      ],
    },
    {
      title: 'Reportes',
      icon: 'file-text',
      collapsible: true,
      children: [
        { title: 'REM A21', path: '03-reportes/01-rem-a21' },
      ],
    },
    {
      title: 'Lista Espera',
      icon: 'list',
      collapsible: true,
      children: [
        { title: 'Garantías Vigentes', path: '04-lista-espera/01-garantias-vigentes' },
      ],
    },
    {
      title: 'Configuración',
      icon: 'settings',
      collapsible: true,
      children: [
        { title: 'Permisos', path: '05-configuracion/01-permisos' },
        { title: 'Roles', path: '05-configuracion/02-roles' },
        { title: 'Etiquetas', path: '05-configuracion/03-etiquetas' },
        { title: 'Establecimientos', path: '05-configuracion/04-establecimientos' },
        { title: 'Ubicaciones', path: '05-configuracion/05-ubicaciones' },
        { title: 'Equipamientos', path: '05-configuracion/06-equipamientos' },
        { title: 'Servicio Clínicos', path: '05-configuracion/07-servicio-clinicos' },
        { title: 'Usuarios', path: '05-configuracion/08-usuarios' },
      ],
    },
    {
      title: 'Maestros',
      icon: 'database',
      collapsible: true,
      children: [
        { title: 'Diagnósticos', path: '06-maestros/01-diagnosticos' },
        { title: 'Exámenes', path: '06-maestros/02-examenes' },
        { title: 'Prestaciones', path: '06-maestros/03-prestaciones' },
        { title: 'Prestadores', path: '06-maestros/04-prestadores' },
        { title: 'Personas', path: '06-maestros/05-personas' },
      ],
    },
    { title: 'Registro de Cambios', path: '10-otros/101-registro-cambios', icon: 'clock' },
    { title: 'Ejemplo', path: '10-otros/102-ejemplo', icon: 'book' },
  ],

  // --- Plugins ---
  plugins: {
    seo: {
      defaultDescription: 'Documentación construida con docmd.',
      openGraph: {
        defaultImage: '',   // e.g. 'assets/images/og-image.png'
      },
      twitter: {
        cardType: 'summary_large_image',
      }
    },
    sitemap: {
      defaultChangefreq: 'weekly',
      defaultPriority: 0.8
    },
    analytics: {
      googleV4: { measurementId: 'G-X9WTDL262N' } // Replace with your GA Measurement ID
    },
    search: {},
    mermaid: {},
    llms: {}
  },
  
  // --- Edit Link ---
  editLink: {
    enabled: false,
    baseUrl: 'https://github.com/gesnovasalud/beachhead-docs/edit/main/docs',
    text: 'Editar esta página'
  }
};
