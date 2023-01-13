/** mostrar menu */
const mostrarMenu = document.querySelector('#icono-menu'),
menu = document.querySelector('#menu');
mostrarMenu.addEventListener('click', (e) =>
{
    menu.classList.toggle('active');
    const cambiarIcono = e.target.getAttribute('class');
    if(cambiarIcono == 'bx bx-expand-horizontal bx-md')
    {
        e.target.setAttribute('class', 'bx bx-collapse-horizontal bx-md');
    }
    else
    {
        e.target.setAttribute('class', 'bx bx-expand-horizontal bx-md');
    }
});
/** animaciones */
window.sr = ScrollReveal();
    sr.reveal('.seccioninicio', 
    {
        duration: 1500,
        origin: 'bottom',
        distance: '-100px'
    });
    sr.reveal('.titulo-info', 
    {
        duration: 1500,
        origin: 'bottom',
        distance: '-100px'
    });
    sr.reveal('.info-text', 
    {
        duration: 2500,
        origin: 'bottom',
        distance: '-300px'
    });
    sr.reveal('.titulo-exp', 
    {
        duration: 1500,
        origin: 'bottom',
        distance: '-300px'
    });
    sr.reveal('.exp-text', 
    {
        duration: 2500,
        origin: 'bottom',
        distance: '-300px'
    });
    sr.reveal('.titulo-exp2', 
    {
        duration: 3000,
        origin: 'bottom',
        distance: '-800px'
    });
    sr.reveal('.preview', 
    {
        duration: 3000,
        origin: 'left',
        distance: '-800px'
    });
    sr.reveal('.titulo-skills', 
    {
        duration: 1500,
        origin: 'bottom',
        distance: '-300px'
    });
    sr.reveal('.skills-text', 
    {
        duration: 2500,
        origin: 'bottom',
        distance: '-300px'
    });
    sr.reveal('.html', 
    {
        duration: 2500,
        origin: 'right',
        distance: '-500px'
    });
    sr.reveal('.css', 
    {
        duration: 2500,
        origin: 'right',
        distance: '-500px'
    });
    sr.reveal('.js', 
    {
        duration: 2500,
        origin: 'right',
        distance: '-500px'
    });
    sr.reveal('.cpp', 
    {
        duration: 2500,
        origin: 'right',
        distance: '-500px'
    });
    sr.reveal('.contact-title', 
    {
        duration: 1500,
        origin: 'bottom',
        distance: '-300px'
    });
    sr.reveal('.contact-text', 
    {
        duration: 2500,
        origin: 'bottom',
        distance: '-300px'
    });
    sr.reveal('.formulario', 
    {
        duration: 2500,
        origin: 'right',
        distance: '-800px'
    });
    sr.reveal('.fb', 
    {
        duration: 1500,
        origin: 'right',
        distance: '-800px'
    });
    sr.reveal('.tw', 
    {
        duration: 1500,
        origin: 'left',
        distance: '-800px'
    });
    sr.reveal('.em', 
    {
        duration: 2000,
        origin: 'left',
        distance: '-800px'
    });
    sr.reveal('.gh', 
    {
        duration: 2000,
        origin: 'right',
        distance: '-800px'
    });