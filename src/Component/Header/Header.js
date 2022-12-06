// import './Header.css';
import { useState } from 'react';
import AlgoOption from './AlgoOption';
import RandomGrid from '../Grid/RandomGrid';
import ClearGrid from '../Grid/ClearGrid';
import SpeedController from './SpeedController';
import GridButton from '../Grid/GridButton';
import MapButton from '../Map/MapButton';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

const Header=(props)=>{
    const [selectedAlgo,setSelectedAlgo]=useState("none");
    // const [selectedSpeed,setSelectedSpeed]=useState(500);
    
 
    const optionHandler=(option)=>{
        props.handler(option);
    }
    // const SpeedHandler=(speed)=>{
    //     setSelectedSpeed(speed);
    // }

    const AlgorithmHandler=(algorithm)=>{
        setSelectedAlgo(algorithm);
    }

    return(
        // <div class="">
        // <div className=''>
        //     <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        //         <div class="nav-brand text-white"><h1> Visualizer </h1></div>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        //         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //         </button>
    
        //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        //             <li><div class="nav-link"><AlgoOption selection={props.type} handler={props.typeHandler} optionType="container"></AlgoOption></div></li>
        //             <li><div class="nav-link"><AlgoOption selection={selectedAlgo} handler={AlgorithmHandler} optionType="algorithm"></AlgoOption></div></li>
        //                     {/* <h3>{ props.speed}</h3> */}
                    // {props.type=="grid" &&
                    //     <>
                    //         <li><div class="nav-link"><GridButton selectedAlgo={selectedAlgo}  ></GridButton></div></li>
                    //         {/* <li><div class="nav-link"><SpeedController speed={selectedSpeed} speedHandler={SpeedHandler}></SpeedController></div></li> */}
                    //         <li><div class="nav-link"><SpeedController  ></SpeedController></div></li>
                    //         <li><div class="nav-link"><RandomGrid></RandomGrid></div></li>
                    //         <li><div class="nav-link"><ClearGrid></ClearGrid></div></li>
                    //     </>
                    // }
                    // {
                    //     props.type=="map" &&
                    //     <li><div class="nav-link"><MapButton selectedAlgo={selectedAlgo}  ></MapButton></div></li>
                    // }
        //         </ul>
        //         </div>
        //     </nav>
        //     </div>
        // </div>

        <Navbar bg="dark" variant="dark" expand="lg">
            {/* <Container className=""> */}
                <Navbar.Brand className="mx-5" style={{fontSize : 30}}>Visualizer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto px-5">
                            <Nav.Link><AlgoOption selection={props.type} handler={props.typeHandler} optionType="container"></AlgoOption></Nav.Link>
                            <Nav.Link><AlgoOption selection={selectedAlgo} handler={AlgorithmHandler} optionType="algorithm"></AlgoOption></Nav.Link>
                        {props.type==="grid" &&
                            <>
                                {/* <li><div class="nav-link"><SpeedController speed={selectedSpeed} speedHandler={SpeedHandler}></SpeedController></div></li> */}
                                <Nav.Link><GridButton selectedAlgo={selectedAlgo} isCord={props.isCord} ></GridButton></Nav.Link>
                                <Nav.Link><Form.Label className="text-white">Speed</Form.Label></Nav.Link>
                                <Nav.Link><SpeedController ></SpeedController></Nav.Link>
                                <Nav.Link><RandomGrid></RandomGrid></Nav.Link>
                                <Nav.Link><ClearGrid></ClearGrid></Nav.Link>
                            </>
                        }
                        {
                            props.type==="map" &&
                            <Nav.Link>
                                <MapButton selectedAlgo={selectedAlgo}  ></MapButton>
                            </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>

    );
}

export default Header;  