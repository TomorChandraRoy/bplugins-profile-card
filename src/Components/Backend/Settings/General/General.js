import { __ } from "@wordpress/i18n";

import {
  PanelBody,


} from "@wordpress/components";


const General = ({ attributes, setAttributes }) => {

const{stats,bio,title,name,skills,nameStyle,buttonOneText,buttonTwoText}= attributes;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Name", "b-blocks")}
        initialOpen={true}
      >
        <div>

        </div>
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Sliders AutoPlay", "b-blocks")}
        initialOpen={false}
      >

       
    
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Sliders Navigation", "b-blocks")}
        initialOpen={false}
      >

      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Sliders Pagination", "b-blocks")}
        initialOpen={false}
      >

      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Slider Auto Play  ", "b-blocks")}
        initialOpen={false}
      >

      </PanelBody>
    </>
  );
};

export default General;
