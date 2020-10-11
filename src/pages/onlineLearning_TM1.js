import React from 'react'; //, { useEffect, useState }
import '../styles/index.css';
import Layout from "../components/layout"

function Index() {
  return (
    <Layout title ="Technische Mechanik 1">
    <a href="https://www.youtube.com/playlist?list=PLlHpYT1htZxSCNY_SRhfEwWU17Dura9rO"> Youtube Channel: Technische Mechanik 1</a>
    <div class="video-container">
    <iframe src="https://www.youtube.com/embed/4NO4PUSj06o?rel=0" frameborder="0" allowfullscreen="allowfullscreen" title="TM1"></iframe>
    </div>
    </Layout>
  );
}

export default Index;
