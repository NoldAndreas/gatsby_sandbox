import React, {Component} from 'react';//, { useEffect, useState }
//import '../styles/index.css';
import Layout from "../components/layout"
import { withPrefix} from "gatsby"
import { Helmet } from 'react-helmet'
import * as d3 from 'd3'

function Project_PRG1() {

  var data_loaded = 1

  d3.csv('Figure2_a.csv').then(function(data) {
    console.log("d3 load");
    console.log(data); // [{"Hello": "world"}, …]
    data_loaded = 2;
  });

  return (
    <Layout title = "Forgetting short term memories">
    <Helmet>
    <script src="https://d3js.org/d3.v4.min.js"></script>
    <script src="https://unpkg.com/d3-3d/build/d3-3d.min.js"></script>
    //<script src="https://d3js.org/d3.v4.min.js"></script>
    <script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script>
   // <script src={withPrefix('Figure2_a.js')} type="text/javascript"/>
    //<script src={withPrefix('Figure4_c2.js')} type="text/javascript"/>
    </Helmet>
    <p>
    Check out the full paper on "Formation and synaptic control of active transient working memory representations" at <a href={"https://www.biorxiv.org/content/10.1101/2020.08.30.273995v1"}> BioRxiv </a>.
    </p>
    <p>Neural representations of working memory maintain information temporarily and make it accessible for processing. This is most feasible in active, spiking representations. State-of-the-art modeling frameworks, however, reproduce working memory representations that are either transient but non-active or active but non-transient. Here, we analyze a biologically motivated working memory model which shows that synaptic short-term plasticity and noise emerging from spiking networks can jointly produce a working memory representation that is both active and transient. We investigate the effect of a synaptic signaling mechanism whose dysregulation is related to schizophrenia and show how it controls transient working memory duration through presynaptic, astrocytic and postsynaptic elements. Our findings shed light on the computational capabilities of healthy working memory function and offer a possible mechanistic explanation for how molecular alterations observed in psychiatric //diseases such as schizophrenia can lead to working memory impairments.</p>
    {data_loaded}
      <div id="my_dataviz" align="center"><select id="selectButton"></select></div>
      <div id="my_dataviz_4c2" align="center"></div>
      <script src="Figure2_a.js"></script>
    </Layout>
  );
}

export default Project_PRG1;
