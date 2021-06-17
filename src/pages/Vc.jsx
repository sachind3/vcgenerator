import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { jsPDF } from "jspdf";
import template1 from "./../assets/images/template1.jpg";

const Vc = () => {
  const [fullName, setFullName] = useState("");
  const [degree, setDegree] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (fullName.trim() && degree.trim() && mobile.trim() && email.trim()) {
      createPdfVc(fullName, degree, mobile, email);
      setFullName("");
      setDegree("");
      setMobile("");
      setEmail("");
    } else {
      alert("Please fill all the fields");
    }
  };

  const createPdfVc = (fullName, degree, mobile, email) => {
    const docPdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [336, 192],
    });
    docPdf.addImage(template1, "JPEG", 0, 0, 336, 192);
    docPdf.setFontSize(10);
    docPdf.setTextColor("black");
    docPdf.text(fullName, 70, 75);
    docPdf.setFontSize(10);
    docPdf.setTextColor("#444444");
    docPdf.text(degree, 70, 86);
    docPdf.setFontSize(12);
    docPdf.setTextColor("#000000");
    docPdf.textWithLink(mobile, 70, 110, { url: `tel:${mobile}` });
    docPdf.setFontSize(12);
    docPdf.setTextColor("#000000");
    docPdf.textWithLink(email, 70, 120, {
      url: email,
    });
    docPdf.save(`${fullName}-${Date.now()}.pdf`);
  };
  return (
    <section className="py-3">
      <Container fluid>
        <Card className="shadow-sm">
          <Card.Header as="h5">Generate VC</Card.Header>
          <Card.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDegree">
                <Form.Label>Degree</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter degree"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMobile">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Vc;
