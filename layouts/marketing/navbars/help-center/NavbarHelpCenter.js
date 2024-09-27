// import node module libraries
import { Fragment, useState } from 'react';
import Link from 'next/link';
import {
	Row,
	Col,
	Collapse,
	Form,
	Image,
	Navbar,
	Container,
	CloseButton
} from 'react-bootstrap';
import PropTypes from 'prop-types';

// import sub component
import DarkLightMode from 'layouts/DarkLightMode';
import HelpCenterDropDown from './HelpCenterDropDown';

const NavbarHelpCenter = ({ bg, className }) => {
	const [open, setOpen] = useState(false);
	return (
		<Fragment>
			<Collapse in={open}>
				<Container >
					<Row className="align-items-center">
						<Col md={11} xs={10}>
							<div className="py-4">
								<Form className="d-flex align-items-center">
									<span className="position-absolute ps-3">
										<i className="fe fe-search text-muted"></i>
									</span>
									<Form.Control
										type="search"
										placeholder="Enter a question, topic or keyword"
										className="form-control ps-6 border-0 py-3 smooth-shadow-md"
									/>
								</Form>
							</div>
						</Col>
						<Col md={1} xs={2}>
							<CloseButton onClick={() => setOpen(!open)} />
						</Col>
					</Row>
				</Container>
			</Collapse>
			<Navbar bg={bg} className={className} expand="lg">
				<Container className="px-0 ">
					<div className="d-flex align-items-center">
						<Navbar.Brand
							as={Link}
							href="/"
							className={bg === 'dark' ? 'text-inverse navbar-brand' : 'navbar-brand'}
						>
							<Image src="/images/brand/logo/logo.svg" alt="" />
						</Navbar.Brand>
						<div className={`justify-content-between d-flex`}>
							<div style={{height:'18px',marginTop :'13px'}} className={`vr bg-${bg === 'black' ? 'light' : 'black'} bg-opacity-25`} ></div>
							<HelpCenterDropDown/>
						</div>
					</div>
					<div className="ms-auto d-flex align-items-center">
						<DarkLightMode className="me-2"/>
						<Link
							href="#"
							className={`me-md-4 text-${bg === 'dark' ? 'white-50' : 'inherit'} collapsed`}
							onClick={() => setOpen(!open)}
							aria-controls="example-collapse-text"
							aria-expanded={open}>
							<i className="fe fe-search fs-3"></i>
						</Link>
						<Link
							href="/marketing/help-center/support/"
							className="btn btn-primary d-md-block d-none">
							Submit Ticket
						</Link>
					</div>
				</Container>
			</Navbar>
		</Fragment>
	);
};

NavbarHelpCenter.propTypes = {
	bg: PropTypes.string,
	className: PropTypes.string
};

NavbarHelpCenter.defaultProps = {
	bg: 'dark',
	className: ''
};

export default NavbarHelpCenter;
