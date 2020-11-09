import React from "react"
import ExpData from "../../content/experience.yaml"
import 'react-vertical-timeline-component/style.min.css';
import "./pages.css"

const Experience = () => (
  <div>
    <h2>{ExpData.title}</h2>
    <ul>
      {ExpData.content.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.item}</li>
      })}
    </ul>
    <div class="timeline">
  <div class="container right">
    <div class="content">
      <h2>2017</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2016</h2>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
</div>
  </div>
)

export default Experience
