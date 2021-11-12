import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";
import { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import ConteinerImage from "@/ui/ConteinerImage";

const DetailTicket = ({ ticketData }) => {
	const { files, id } = ticketData;
	const [pdfShow, setPdfShow] = useState(false);

	const typeFile = (file) => {
		const newString = file.slice(file.length - 3);
		return newString === "pdf" ? true : false;
	};

	if (!id) return null;
	return (
		<div className="d-flex flex-wrap justify-content-between flex-col mh-100">
			{files.map((f) => (
				<Fragment key={`${f.id}`}>
					{typeFile(f.url) ? (
						<div className="w-100">
							{!pdfShow && (
								<Button
									className="mb-2 mx-auto d-block text-white"
									variant="custom-blue"
									onClick={() =>
										setPdfShow({
											url: f.url,
											title: f.name,
										})
									}
								>
									{f.name}
								</Button>
							)}
							<Modal fullscreen show={pdfShow} onHide={() => setPdfShow(false)}>
								<Modal.Header closeButton>
									<Modal.Title>{pdfShow.title}</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<object
										data={pdfShow.url}
										type="application/pdf"
										width="100%"
										height="100%"
									>
										<iframe src={pdfShow.url} width="100%" height="100%">
											<p>This browser does not support PDF!</p>
										</iframe>
									</object>
								</Modal.Body>
							</Modal>
						</div>
					) : (
						<ConteinerImage width="80%" height="150px">
							<Image
								src={f.url}
								alt={f.name}
								layout="fill"
								objectFit="contain"
							/>
						</ConteinerImage>
					)}
				</Fragment>
			))}
		</div>
	);
};

DetailTicket.propTypes = {};

export default DetailTicket;
