import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from "react";

export default function Header(){
	  const [scrollY, setScrollY] = useState(0);
	  useEffect(() => {
		   const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
	 window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
		  
	 }, []);
	return (
	<>
	<header className={scrollY > 100
          ? "f-top"
          : ""}>
        <div className="container">
			<div className="row d-flex align-items-center">
				<div className="col-3 col-md-3">
				    <div className="logo">
						<Link href="/"> 
								<Image src="/logo.svg" width={82} height={127} alt="logo"/>
						</Link>
					</div>
				</div>
				<div className="col-3 col-md-6">
				   <nav>
						<ul className="d-flex align-items-center justify-content-center">
							<li><a href="#">Collectie</a></li>
							<li><a href="#">Classics</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
				   </nav>
				</div>
				<div className="col-3 col-md-3">
				  <div className="mobile-menu"></div>
				</div>
			</div>	 
		</div>
	</header>	
	<header className={scrollY > 100
          ? "s-top"
          : "hide"}>
        <div className="container">
			<div className="row d-flex align-items-center">
				<div className="col-3 col-md-3">
				    <div className="logo">
						<Link href="/"> 
								<Image src="/logo.svg" width={82} height={127} alt="logo"/>
						</Link>
					</div>
				</div>
				<div className="col-3 col-md-6">
				   <nav>
						<ul className="d-flex align-items-center justify-content-center">
							<li><a href="#">Collectie</a></li>
							<li><a href="#">Classics</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
				   </nav>
				</div>
				<div className="col-3 col-md-3">
				  <div className="mobile-menu"></div>
				</div>
			</div>	 
		</div>
	</header>
	</>
    )
}