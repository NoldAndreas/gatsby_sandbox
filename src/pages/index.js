import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

import {Card,Container,Row,Col,Image} from 'react-bootstrap'
import im from "../images/nature.jpg"

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
//<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

//style={{ width: '12rem' }}

const IndexPage = () => (


  <Layout>
    <SEO title="Home" />

    <div class="flex mb-4">
      <div class="w-1/2 bg-gray-400 h-12"></div>
      <div class="w-1/2 bg-gray-500 h-12"></div>
    </div>

    <Container fluid>
      <Row>
        <Col lg={4}>
          <Card>
            <Image
              src ={im}
              className = "card-im-top"
              alt="random image"
              fluid
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Link href="d3_react_example">Card Link</Card.Link>
              <Card.Text>
              s simply dummy text of the printing and typesetting industry.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Link href="d3_react_example">Card Link</Card.Link>
              <Card.Text>
              s simply dummy text of the printing and typesetting industry.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Link href="d3_react_example">Card Link</Card.Link>
              <Card.Text>
              s simply dummy text of the printing and typesetting industry.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Link href="d3_react_example">Card Link</Card.Link>
              <Card.Text>
              s simply dummy text of the printing and typesetting industry.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Link href="d3_react_example">Card Link</Card.Link>
              <Card.Text>
              s simply dummy text of the printing and typesetting industry.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
