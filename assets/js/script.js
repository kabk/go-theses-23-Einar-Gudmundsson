let disabled = false;

function handleIntersect(entries) {
  const entry = entries.find(entry => entry.isIntersecting);

  if (!entry || disabled) return;
  
  const image = document.getElementById('fixed-image');
  const link = document.querySelector(`a[href="#${entry.target.id}"]`);

  link.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'center' });

  image.setAttribute('style', `left: ${link.getBoundingClientRect().x + 50}px`);
}

const observer = new IntersectionObserver(handleIntersect, {
  root: document.querySelector('.page-wrapper'),
  rootMargin: '100px',
  threshold: 0.1,
  delay: 500
});

document.addEventListener('DOMContentLoaded', function() {
  const image = document.getElementById('fixed-image');
  const headings = Array.from(document.querySelectorAll('.main-nav > li > a'))
    .map(link => link.getAttribute('href'));

  for (const heading of headings) {
    observer.observe(document.querySelector(heading));
  }
})


window.addEventListener(
  "scroll",
  event => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

// window.addEventListener('scroll', function() {
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
// });


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

// // Get references to the button, modal, and close button elements
// var openModalBtn = document.getElementById("openModal");
// var modal = document.getElementById("myModal");
// var span = document.getElementsByClassName("close")[0];

// // Add a click event listener to the button
// openModalBtn.addEventListener("click", function() {
//   modal.style.display = "block"; // Show the modal
// });

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// // Example event listeners to open the modal from a link or the modal itself
// var link = document.getElementById("myLink");
// link.onclick = function(event) {
//   event.preventDefault(); // Prevent the link from navigating to the URL
//   modal.style.display = "block"; // Show the modal
// }

// modal.onclick = function() {
//   modal.style.display = "block"; // Show the modal
//   // Load content into the modal here
// }


// NEW JS

// var openModalBtn = document.getElementById("openModal");
// var modal = document.getElementById("myModal");
// var span = document.getElementsByClassName("close")[0];

// openModalBtn.addEventListener("click", function() {
//   modal.style.display = "block";
// });

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
