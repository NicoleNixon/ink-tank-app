import { Heading, Page } from "@shopify/polaris";



//console log results when you are unsure of their type/formatting
class Index extends React.Component {
  
  constructor() {
    super();
    this.state = {open: false};
    //if creating new function must do something like (if function was called save):
        //this.save = this.sttae.bind(this);
  }


  //PUT FUNCTIONS THAT YOU ARE REFERENCING IN YOUR REACT COMPONENTS HERE 
  //(functions that are triggered by events/actions)


  render() {
    return(
      <Page title ='Ink Tank Shopify App'/>
      //PUT REACT COMPONENTS HERE THAT YOU WANT TO BE RENDERED ON THE PAGE 
      
    )
  }


}
export default Index;