import { List, Page, ResourceList, Card } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";



//console log results when you are unsure of their type/formatting
class Index extends React.Component {
  
  constructor() {
    super();
    this.state = {open: false};
  //  this.handle_selection = this.state.bind(this)
    this.state = {collection_ids: null};
    //if creating new function must do something like (if function was called save):
        //this.save = this.state.bind(this);
    this.state = {selection: []};
  }


  //PUT FUNCTIONS THAT YOU ARE REFERENCING IN YOUR REACT COMPONENTS HERE 
  //(functions that are triggered by events/actions)
  handle_selection = (resources) => {
    this.setState({collection_ids: resources.selection.map((product) => product.id)})
    this.setState({open: false})
    this.setState({selection: resources})
  }



  render() {
    return(
      <Page 
      title ='Ink Tank Shopify App'
     
      //PUT REACT COMPONENTS HERE THAT YOU WANT TO BE RENDERED ON THE PAGE 
      primaryAction={{
        content: 'Select Products',
        onAction: () => this.setState({open: true})
      }}
      >
        <ResourcePicker
          resourceType="Product"
          open={this.state.open}
          onCancel={() => this.setState({open: false})}
          onSelection={(resources) => this.handle_selection(resources)}
        />
      </Page>
    )
  }


}
export default Index;
