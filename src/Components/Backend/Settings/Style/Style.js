import { __ } from "@wordpress/i18n";
import {
  ColorPalette,
  FontSizePicker,
  PanelBody,
  RangeControl,
  SelectControl,
  __experimentalBoxControl as BoxControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import {} from "../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {
  // const {} = attributes;

  return (
    <>
      <PanelBody
        className="bPlPanel"
        title={__("Slider Header Styles ", "b-blocks")}
        initialOpen={false}
      >
        <h5>{__("Header Color:", "b-blocks")}</h5>
        <ColorPalette
          value={"" || ""}
          onChange={(value) => {
            setAttributes({SliderNameColor: value});
          }}
        />

        <SelectControl
          label={__("Header Select Tag : ")}
          value={""}
          onChange={(tag) => {
            setAttributes({SliderNameTag: tag});
          }}
          options={[
            { value: null, label: "Select a User", disabled: true },
            { value: "h1", label: "H1" },
            { value: "h2", label: "H2" },
            { value: "h3", label: "H3" },
            { value: "h4", label: "H4" },
            { value: "h5", label: "H5" },
            { value: "h6", label: "H6" },
          ]}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody2"
        title={__("Description Color Styles ", "b-blocks")}
        initialOpen={false}
      >
        <h5>{__("Description Color:", "b-blocks")}</h5>
        <ColorPalette
          value={"" || ""}
          onChange={(value) => {
            setAttributes({descriptionColor: value});
          }}
        />
        <h5>{__("Description font Size:", "b-blocks")}</h5>
        <FontSizePicker
          fontSizes={[
            {
              name: "Small",
              size: 12,
              slug: "small",
            },
            {
              name: "Normal",
              size: 16,
              slug: "normal",
            },
            {
              name: "Big",
              size: 26,
              slug: "big",
            },
          ]}
          onChange={(size) => {
            setAttributes({ descriptionFontSize: size 
            });
          }}
          value={""}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Slider Effect", "b-blocks")}
        initialOpen={false}
      >
        <SelectControl
          // fade,coverflow,flip,creative,cards
          value={""}
          onChange={(eff) => setAttributes({ SliderEffect: eff })}
          options={[
            { value: null, label: "Select a Effect", disabled: true },
            { value: "", label: "Default" },
            { value: "coverflow", label: "Cover flow" },
            { value: "cards", label: "Cards" },
          ]}
        />
      </PanelBody>

      <PanelBody
        title={__("Background Opacity", "b-blocks")}
        initialOpen={false}
      >
        <RangeControl
          label={__("Opacity", "b-blocks")}
          value={""}
          onChange={(value) => setAttributes({ slidersOpacity: value })}
          min={0}
          max={1}
          step={0.1}
        />
      </PanelBody>
      <PanelBody title={__("Border Radius", "b-blocks")} initialOpen={false}>
        <BoxControl
          label="Border Radius"
          values={""}
          onChange={(Value) => setAttributes({ SliderRedius: Value })}
        />
      </PanelBody>

      <PanelBody title={__("Slider Size", "b-blocks")} initialOpen={false}>
        <UnitControl
          label="Height"
          value={""}
          onChange={(newHeight) => setAttributes({ sliderHeight: newHeight })}
        />
        <UnitControl
          label="Width"
          value={""}
          onChange={(newWidth) => setAttributes({ sliderWidth: newWidth })}
        />
      </PanelBody>

      <PanelBody
        title={__("Sliders Image Control", "b-blocks")}
        initialOpen={true}
      >
        <RangeControl
          label={__("Sliders Control Image ", "b-blocks")}
          value={""}
          onChange={(value) => setAttributes({ slidersControl: value })}
          min={1}
          max={4}
          step={1}
        />
      </PanelBody>
    </>
  );
};

export default Style;
