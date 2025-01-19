

const Style = ({ attributes, id }) => {

console.log(attributes, id
	
);

  
	return (
	<style
		dangerouslySetInnerHTML={{
		__html: `
	
		  `
		}}
    />
	);
  };
  
  export default Style;
  