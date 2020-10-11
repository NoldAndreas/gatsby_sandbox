import React, {Component} from 'react'
import Layout from "../components/layout"
import * as d3 from 'd3'
import SEO from "../components/seo"

function testLoad() {

  var data_loaded = 1

  d3.csv('Figure2_a.csv').then(function(data) {
    console.log("d3 load")
    console.log(data)
    data_loaded = 2
  });

  return (
    <Layout>
      <SEO title="Page load" />
      adsf
   </Layout>
  );
}

export default testLoad;
