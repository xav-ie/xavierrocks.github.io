import './Header.css';

const Header = ()=>{
    return (
	<>
	    <header>
		<a href="/" className="logo">
		    <object id="heart" type="image/svg+xml" data="/heart.svg">
			Your browser does not support SVG
		    </object>
		</a>
		<div className="title">
		    <h1>Xavier Ruiz</h1>
		    <h2>Software Developer</h2>
		</div>
	    </header>
	    <navbar className="row no-margin middle-xs shadow">
		<ul className="header-links no-padding no-margin col-xs-12 col-sm-8 col-md-6 col-lg-5 row around-xs">
		    <li className="col">
			<a href="#projects">
			    #projects
			</a>
		    </li>
		    <li className="col">
			<a href="#about_me">
			    #about_me
			</a>
		    </li>
		    <li className="col">
			<a href="#contact_me">
			    #contact_me
			</a>
		    </li>
		    <li className="col">
			<a href="/r.pdf" target="_blank">
			    /resumé.pdf
			</a>
		    </li>

		</ul>
		
	    </navbar>
	</>
    );
}

export default Header;
