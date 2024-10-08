// import node module libraries
import { Fragment } from 'react';
import Link from 'next/link';
import { Col, Row, Image } from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiFacebook, mdiTwitter, mdiGithub } from '@mdi/js';

// import BS icons
import { Telephone, EnvelopeOpen, GeoAlt } from 'react-bootstrap-icons';

// import widget/custom components
import { GeeksSEO } from 'widgets';

// import sub components
import { ContactForm } from 'sub-components';

// import your layout to override default layout 
import BlankLayout from 'layouts/marketing/BlankLayout';

const Contact = () => {
	return (
		<Fragment>
			{/* Geeks SEO settings  */}
			<GeeksSEO title="Contact | Geeks Nextjs Template" />
			<main>
				<section className="bg-white container-fluid">
					<Row className="align-items-center min-vh-100">
						<Col lg={6} md={12} sm={12}>
							<div className="px-xl-20 px-md-8 px-4 py-8 py-lg-0">
								{/* content */}
								<div className="d-flex justify-content-between mb-7 align-items-center">
									<Link href="/">
										<Image src="/images/brand/logo/logo.svg" alt="" className='logo-inverse' />
									</Link>
								</div>
								<div className="text-dark">
									<h1 className="display-4 fw-bold">Get In Touch.</h1>
									<p className="lead text-dark">
										Fill in the form to the right to get in touch with someone on
										our team, and we will reach out shortly.
									</p>

									<div className="mt-8">
										<p className="fs-4 mb-4">
											If you are seeking support please visit our{' '}
											<Link href="#">support portal</Link> before reaching out
											directly.
										</p>
										{/* Address */}
										<p className="fs-4">
											<Telephone size={16} className="text-primary me-2" /> +
											0123-456-7890
										</p>
										<p className="fs-4">
											<EnvelopeOpen size={16} className="text-primary me-2" />{' '}
											hello@geekui.com
										</p>
										<p className="fs-4 ">
											<GeoAlt size={17} className="text-primary me-2" /> 2652 Kooter
											Lane Charlotte, NC 28263
										</p>
									</div>

									{/* social media */}
									<div className="mt-10">
										{/*Facebook*/}
										<Link href="#" className="text-muted me-3">
											<Icon path={mdiFacebook} size={1} />
										</Link>
										{/*Twitter*/}
										<Link href="#" className="text-muted me-3">
											<Icon path={mdiTwitter} size={1} />
										</Link>
										{/*GitHub*/}
										<Link href="#" className="text-muted ">
											<Icon path={mdiGithub} size={1} />
										</Link>
									</div>
								</div>
							</div>
						</Col>

						{/* right side form section with background color */}
						<Col
							lg={6}
							className="d-lg-flex align-items-center w-lg-50 min-vh-lg-100 position-fixed-lg bg-cover bg-light top-0 right-0"
						>
							<ContactForm />
						</Col>
					</Row>
				</section>
			</main>
		</Fragment>
	);
};

Contact.Layout = BlankLayout;

export default Contact;
