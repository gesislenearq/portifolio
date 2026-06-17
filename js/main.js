const PROJECTS = [
  {
    name: "La Belle",
    cat: "Comercial · Interiores · 2026",
    tools: "Projeto executivo · Revit",
    images: [
      "imgs/com/capa-loja-labelle-02.png",
      "imgs/com/loja-labelle-01.png",
      "imgs/com/loja-labelle-03.png",
      "imgs/com/loja-labelle-04.png"
    ]
  },
  {
    name: "Capital Diesel",
    cat: "Fachada Comercial · 2026",
    tools: "Projeto arquitetônico",
    images: [
      "imgs/com/capa-capital-diesel-02.jpg",
      "imgs/com/capital-diesel-01.jpg"
    ]
  },
  {
    name: "Recepção",
    cat: "Comercial · Interiores",
    tools: "Projeto de interiores · SketchUp",
    images: [
      "imgs/com/capa-recepcao-02.png",
      "imgs/com/recepcao-01.png"
    ]
  },
  {
    name: "Suíte Master",
    cat: "Casa Veraneio · Residencial · 2026",
    tools: "Projeto de interiores · Revit",
    images: [
      "imgs/res/suite-master-01-capa.png",
      "imgs/res/suite-master-02.png"
    ]
  },
  {
    name: "Suíte dos Filhos I",
    cat: "Casa Veraneio · Residencial · 2026",
    tools: "Projeto de interiores · Revit",
    images: [
      "imgs/res/suite-filhos-1-01-capa.png",
      "imgs/res/suite-filhos-1-02.png"
    ]
  },
  {
    name: "Suíte dos Filhos II",
    cat: "Casa Veraneio · Residencial · 2026",
    tools: "Projeto de interiores · Revit",
    images: [
      "imgs/res/suite-filhos-2-01-capa.png",
      "imgs/res/suite-filhos-2-02.png"
    ]
  },
  {
    name: "Suíte de Hóspedes I",
    cat: "Casa Veraneio · Residencial · 2026",
    tools: "Projeto de interiores · Revit",
    images: [
      "imgs/res/suite-hospede-1-01-capa.png",
      "imgs/res/suite-hospede-1-02.png"
    ]
  },
  {
    name: "Suíte de Hóspedes II",
    cat: "Casa Veraneio · Residencial · 2026",
    tools: "Projeto de interiores · Revit",
    images: [
      "imgs/res/suite-hospede-2-01-capa.png",
      "imgs/res/suite-hospede-2-02.png"
    ]
  },
  {
    name: "Banheiro Suíte Master",
    cat: "Casa Veraneio · Residencial · 2026",
    tools: "Projeto de interiores · Revit",
    images: [
      "imgs/res/banheiro-suite-master.png"
    ]
  },
  {
    name: "Banheiro dos Filhos",
    cat: "Casa Veraneio · Residencial · 2026",
    tools: "Projeto de interiores · Revit",
    images: [
      "imgs/res/banheiro-filhos.png"
    ]
  },
  {
    name: "Lavabo I",
    cat: "Casa Veraneio · Residencial · 2026",
    tools: "Projeto de interiores · Revit",
    images: [
      "imgs/res/Lavabo-01.png"
    ]
  },
  {
    name: "Lavabo II",
    cat: "Casa Veraneio · Residencial · 2026",
    tools: "Projeto de interiores · Revit",
    images: [
      "imgs/res/Lavabo-02.png"
    ]
  },
  {
    name: "Sala de TV · Cinema",
    cat: "Residencial · Interiores",
    tools: "Projeto de interiores · Revit",
    images: [
      "imgs/res/sala-tv-cinema.png"
    ]
  },
  {
    name: "Cozinha Americana",
    cat: "Residencial · Interiores",
    tools: "Projeto de interiores · Revit",
    images: [
      "imgs/res/cozinha-americana-01-capa.png",
      "imgs/res/cozinha-americana-02.png",
      "imgs/res/cozinha-americana-03.png"
    ]
  },
  {
    name: "Cozinha Pedra Verde",
    cat: "Residencial · Interiores",
    tools: "Projeto de interiores",
    images: [
      "imgs/res/cozinha-pedra-verde-01-capa.png",
      "imgs/res/cozinha-pedra-verde-02.png"
    ]
  },
  {
    name: "Dormitório Infantil",
    cat: "Residencial · Interiores",
    tools: "Projeto de interiores · Revit",
    images: [
      "imgs/res/dormitorio-infantil-01-capa.png",
      "imgs/res/dormitorio-infantil-02.png"
    ]
  }
];

const filterBtns = document.querySelectorAll('.filter-btn');
const allCards = () => [...document.querySelectorAll('#projects-grid .project-card')];

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    allCards().forEach(card => {
      const cats = card.dataset.category || '';
      card.classList.toggle('hidden', filter !== 'todos' && !cats.includes(filter));
    });
  });
});

const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const lbClose = document.getElementById('lightbox-close');
const lbPrev = document.getElementById('lightbox-prev');
const lbNext = document.getElementById('lightbox-next');
const lbCat = document.getElementById('lb-cat');
const lbName = document.getElementById('lb-name');
const lbTools = document.getElementById('lb-tools');

let currentProject = 0;
let currentIndex = 0;

function openLightbox(projectId, imgIndex) {
  currentProject = projectId;
  currentIndex = imgIndex || 0;
  showImage();
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

function showImage() {
  const p = PROJECTS[currentProject];
  lbImg.src = p.images[currentIndex];
  lbImg.alt = p.name;
  lbCat.textContent = p.cat;
  lbName.textContent = p.name;
  lbTools.textContent = `${p.tools} · ${currentIndex + 1} / ${p.images.length}`;
  lbPrev.style.display = p.images.length > 1 ? 'block' : 'none';
  lbNext.style.display = p.images.length > 1 ? 'block' : 'none';
}

function prevImage() {
  const total = PROJECTS[currentProject].images.length;
  currentIndex = (currentIndex - 1 + total) % total;
  showImage();
}

function nextImage() {
  const total = PROJECTS[currentProject].images.length;
  currentIndex = (currentIndex + 1) % total;
  showImage();
}

document.querySelectorAll('#projects-grid .project-card').forEach(card => {
  card.addEventListener('click', () => {
    const pid = parseInt(card.dataset.project, 10);
    if (!isNaN(pid)) openLightbox(pid, 0);
  });
});

lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', prevImage);
lbNext.addEventListener('click', nextImage);

lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });

document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'ArrowRight') nextImage();
});

let touchStartX = 0;
lb.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
lb.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) diff > 0 ? nextImage() : prevImage();
});
