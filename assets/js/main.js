// Main JS for Ramsés Padrón - Portfolio de Ingeniería Electrónica (Minimalist Flat Solid Design)

document.addEventListener('DOMContentLoaded', () => {
  const projects = window.PROJECTS_DATA || [];
  let currentCategory = 'all';
  let searchQuery = '';

  const projectsGrid = document.getElementById('projectsGrid');
  const searchInput = document.getElementById('searchInput');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const noResults = document.getElementById('noResults');

  // Modal elements
  const projectModal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const closeModalBtn = document.getElementById('closeModalBtn');

  // Lightbox elements
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');

  // Mobile menu
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // Header hide on top, appear on scroll down
  const mainHeader = document.getElementById('mainHeader');
  if (mainHeader) {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        mainHeader.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
        mainHeader.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
      } else {
        mainHeader.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
        mainHeader.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Category badge color helper (Clean solid subtle tints without glow)
  function getBadgeClasses(category) {
    switch (category) {
      case 'potencia':
        return 'bg-amber-950/40 text-amber-300 border-amber-600/30';
      case 'rf':
        return 'bg-orange-950/40 text-orange-300 border-orange-600/30';
      case 'embebidos':
        return 'bg-[#3b1111]/80 text-[#ff5555] border-[#ff3b3b]/40';
      case 'software':
        return 'bg-[#2e1d13]/80 text-[#d49b6a] border-[#a06235]/50';
      default:
        return 'bg-orange-950/40 text-orange-300 border-orange-600/30';
    }
  }

  // Render Projects
  function renderProjects() {
    const filtered = projects.filter(p => {
      const matchCat = (currentCategory === 'all') || (p.category === currentCategory);
      const query = searchQuery.toLowerCase().trim();
      const matchSearch = !query || 
        p.title.toLowerCase().includes(query) ||
        p.summary.toLowerCase().includes(query) ||
        p.subject.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query));
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      projectsGrid.innerHTML = '';
      noResults.classList.remove('hidden');
      return;
    }

    noResults.classList.add('hidden');

    projectsGrid.innerHTML = filtered.map(p => {
      const badgeCls = getBadgeClasses(p.category);
      const tagsHtml = p.tags.slice(0, 4).map(t => 
        `<span class="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60 font-mono">${t}</span>`
      ).join('');

      return `
        <article class="group relative flex flex-col rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors duration-200 overflow-hidden">
          <!-- Image Container -->
          <div class="relative h-48 w-full overflow-hidden bg-zinc-950 cursor-pointer" onclick="openProjectModal('${p.id}')">
            <img 
              src="${p.heroImage}" 
              alt="${p.title}" 
              loading="lazy"
              class="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-70"></div>
            
            <!-- Category Badge -->
            <div class="absolute top-3 left-3">
              <span class="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded border ${badgeCls}">
                ${p.categoryLabel}
              </span>
            </div>

            <!-- Date -->
            <div class="absolute top-3 right-3">
              <span class="text-xs px-2 py-0.5 rounded bg-zinc-950/90 text-zinc-300 border border-zinc-800 font-mono">
                ${p.date}
              </span>
            </div>

            <!-- Photos count pill -->
            <div class="absolute bottom-2.5 right-3">
              <span class="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-zinc-950/90 text-zinc-300 border border-zinc-800">
                <i data-lucide="camera" class="w-3.5 h-3.5 text-orange-400"></i> ${p.gallery.length} fotos
              </span>
            </div>
          </div>

          <!-- Body -->
          <div class="flex-1 p-5 flex flex-col justify-between">
            <div>
              <div class="text-xs font-mono text-orange-400 mb-1 flex items-center gap-1.5 font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-orange-500"></span> ${p.subject}
              </div>
              <h3 
                onclick="openProjectModal('${p.id}')"
                class="text-base font-bold text-white group-hover:text-orange-400 transition-colors cursor-pointer line-clamp-2 mb-2"
              >
                ${p.title}
              </h3>
              <p class="text-xs text-zinc-400 line-clamp-3 mb-4 leading-relaxed">
                ${p.summary}
              </p>
            </div>

            <div>
              <!-- Tags -->
              <div class="flex flex-wrap gap-1 mb-5">
                ${tagsHtml}
              </div>

              <!-- Actions (Minimalist Solid Flat Buttons) -->
              <div class="pt-3.5 border-t border-zinc-800/80 flex items-center justify-between gap-2.5">
                <button 
                  onclick="openProjectModal('${p.id}')"
                  class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-orange-500 hover:bg-orange-400 text-zinc-950 transition-colors"
                >
                  <i data-lucide="file-text" class="w-3.5 h-3.5"></i> Ficha & Fotos
                </button>
                <a 
                  href="${p.pdfFile}" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 transition-colors"
                  title="Abrir informe técnico completo en PDF"
                >
                  <i data-lucide="download" class="w-3.5 h-3.5 text-zinc-400"></i> PDF
                </a>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Filter click handlers (Minimal flat solid styling)
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-orange-500', 'text-zinc-950', 'border-orange-500', 'font-semibold');
        b.classList.add('bg-zinc-900', 'text-zinc-400', 'border-zinc-800');
      });
      btn.classList.remove('bg-zinc-900', 'text-zinc-400', 'border-zinc-800');
      btn.classList.add('bg-orange-500', 'text-zinc-950', 'border-orange-500', 'font-semibold');

      currentCategory = btn.getAttribute('data-category');
      renderProjects();
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProjects();
    });
  }

  // Open Project Modal
  window.openProjectModal = function(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    const badgeCls = getBadgeClasses(project.category);

    const specsHtml = project.specs && project.specs.length > 0 ? `
      <div class="mb-6 p-4 rounded-lg bg-zinc-950 border border-zinc-800">
        <h4 class="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2 font-semibold">
          <i data-lucide="cpu" class="w-4 h-4 text-orange-400"></i> Especificaciones Técnicas Clave
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${project.specs.map(s => `
            <div class="text-xs flex flex-col p-2.5 rounded bg-zinc-900 border border-zinc-800/80">
              <span class="text-zinc-400 text-[11px]">${s.label}:</span>
              <span class="font-medium text-white mt-0.5">${s.val}</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    const highlightsHtml = project.highlights && project.highlights.length > 0 ? `
      <div class="mb-6">
        <h4 class="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2 font-semibold">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-orange-400"></i> Aspectos Destacados del Desarrollo
        </h4>
        <ul class="space-y-1.5">
          ${project.highlights.map(h => `
            <li class="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
              <span class="text-orange-400 font-bold">▸</span>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    ` : '';

    const galleryHtml = project.gallery && project.gallery.length > 0 ? `
      <div>
        <h4 class="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2 font-semibold">
          <i data-lucide="image" class="w-4 h-4 text-orange-400"></i> Galería de Prototipos, Mediciones y Esquemáticos
        </h4>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          ${project.gallery.map(img => `
            <div 
              onclick="openLightbox('${img.src}', '${img.caption.replace(/'/g, "\\'")}')"
              class="group relative h-28 sm:h-36 rounded-lg overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-orange-500 cursor-pointer transition-colors"
            >
              <img 
                src="${img.src}" 
                alt="${img.caption}" 
                class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-200"
              />
              <div class="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors"></div>
              <div class="absolute bottom-1 left-1 right-1 p-1 rounded bg-zinc-950/90 opacity-0 group-hover:opacity-100 transition-opacity">
                <p class="text-[10px] text-zinc-200 truncate font-mono">${img.caption}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    modalContent.innerHTML = `
      <!-- Header -->
      <div class="flex flex-wrap items-center justify-between gap-2.5 mb-4 pb-3 border-b border-zinc-800">
        <div class="flex items-center gap-2">
          <span class="text-xs font-medium px-2.5 py-0.5 rounded border ${badgeCls}">
            ${project.categoryLabel}
          </span>
          <span class="text-xs text-zinc-400 font-mono">${project.date}</span>
        </div>
        <div class="text-xs text-zinc-400 font-mono">
          ${project.institution}
        </div>
      </div>

      <h2 class="text-xl sm:text-2xl font-bold text-white mb-1.5 leading-tight">
        ${project.title}
      </h2>
      <div class="text-xs text-orange-400 font-mono mb-4">
        Asignatura: ${project.subject} | Autores: ${project.authors}
      </div>

      <p class="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
        ${project.summary}
      </p>

      ${specsHtml}
      ${highlightsHtml}
      ${galleryHtml}

      <!-- Footer Buttons (Minimal Flat) -->
      <div class="mt-8 pt-5 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
        <div class="flex flex-wrap gap-1">
          ${project.tags.map(t => `<span class="text-xs px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800 font-mono">${t}</span>`).join('')}
        </div>
        <div class="flex items-center gap-2.5">
          <a 
            href="${project.pdfFile}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 text-zinc-950 font-semibold text-xs transition-colors"
          >
            <i data-lucide="file-text" class="w-4 h-4"></i> Abrir Informe Completo (PDF)
          </a>
        </div>
      </div>
    `;

    projectModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  // Close Project Modal
  function closeProjectModal() {
    projectModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  // Lightbox functions
  window.openLightbox = function(src, caption) {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || '';
    lightboxModal.classList.remove('hidden');
  };

  function closeLightbox() {
    lightboxModal.classList.add('hidden');
    lightboxImg.src = '';
  }

  if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener('click', closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal || e.target === lightboxImg.parentElement) {
        closeLightbox();
      }
    });
  }

  // Escape key listener for modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!lightboxModal.classList.contains('hidden')) {
        closeLightbox();
      } else if (!projectModal.classList.contains('hidden')) {
        closeProjectModal();
      }
    }
  });

  // Initial render
  renderProjects();
});
