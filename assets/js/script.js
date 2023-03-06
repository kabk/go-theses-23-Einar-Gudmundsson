function handleIntersect(entries) {
  const entry = entries.find(entry => entry.isIntersecting)

  if (!entry) return
  
  const image = document.getElementById('fixed-image');
  const link = document.querySelector(`a[href="#${entry.target.id}"]`)

  image.setAttribute('style', `left: ${link.getBoundingClientRect().left + 50}px`)

  console.log(entry.target, link)
}

const observer = new IntersectionObserver(handleIntersect, {
  root: document.querySelector('.page-wrapper'),
  rootMargin: '500px',
  threshold: 0.0
})

document.addEventListener('DOMContentLoaded', function() {
  const image = document.getElementById('fixed-image');
  const headings = Array.from(document.querySelectorAll('.main-nav > li > a'))
    .map(link => link.getAttribute('href'))

  for (const heading of headings) {
    observer.observe(document.querySelector(heading))
  }
})


window.addEventListener('scroll', function() {
  //var scrollPosition = window.scrollY;
  //var windowHeight = window.innerHeight;
  //var imageWidth = image.clientWidth;
  //var screenWidth = window.innerWidth;

  //var startPosition = 0 - imageWidth;
  //var endPosition = screenWidth;
  //var position = startPosition + (scrollPosition / windowHeight) * (endPosition - startPosition);

  //if (position > endPosition) {
  //  position = endPosition;
  //} else if (position < startPosition) {
  //  position = startPosition;
  //}

  //if (scrollPosition === 0) {
  //  position = startPosition;
  //}

  //image.style.left = position + 'px';
});


// album 
// document.addEventListener( 'DOMContentLoaded', ( ) => {

// 	const filters = document.querySelectorAll('.filter');

// 	filters.forEach(filter => {
// 	  filter.addEventListener( 'click', function() {

// 	  	filter.classList.add( 'active' );
// 	  	filters.forEach( other_filter => {
// 	  		if ( other_filter != filter )
// 			  	other_filter.classList.remove( 'active' );
// 	  	} );

// 		let selectedFilter = filter.getAttribute('data-filter');
// 		let itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter='${selectedFilter}'])`);
// 		let itemsToShow = document.querySelectorAll(`.projects [data-filter='${selectedFilter}']`);

// 		if (selectedFilter == 'all') {
// 		  itemsToHide = [];
// 		  itemsToShow = document.querySelectorAll('.projects [data-filter]');
// 		}

// 		itemsToHide.forEach(el => {
// 		  el.classList.add('hide');
// 		  el.classList.remove('show');
// 		});

// 		itemsToShow.forEach(el => {
// 		  el.classList.remove('hide');
// 		  el.classList.add('show');
// 		});

// 	  });
// 	});

// 	const project_btns = document.querySelectorAll( '.project' );
// 	const project_details = document.querySelector( '#project-details' );
// 	const project_blend = document.querySelector( '#project-blend' );

// 	const closeProject = ( ) => {
// 		project_details.classList.remove( 'opened' );
// 		project_details.innerHTML = '';
// 	}

// 	const openProject = e => {

// 		let project = e.target;
// 		if ( project.nodeName.toLowerCase( ) == 'img' )
// 			project = project.parentNode;

// 		const data_src = project.dataset[ 'src' ];
// 		if ( data_src != undefined && data_src != '' ) {

// 			fetch( data_src )
//     		.then( content => content.text( ) )
//     		.then( content => {
// 					const parser = new DOMParser( );
// 					const doc = parser.parseFromString( content, 'text/html' );

// 					const project_body = doc.querySelector( 'body' );
// 					project_details.innerHTML = '<span class="btn-close">[ close ]</span>' + project_body.innerHTML;

// 					let close_btn = project_details.querySelector( '.btn-close' );
// 					close_btn.addEventListener( 'click', closeProject );

// 					project_details.classList.add( 'opened' );

// 					document.body.style.overflow = 'hidden';

// 				} )
// 				.catch( error => console.log( error ) );
// 		}
// 	}


// 	project_btns.forEach( project => {
// 		project.addEventListener( 'click', openProject );
// 	} );

// 	project_blend.addEventListener( 'click', closeProject );

// } );
