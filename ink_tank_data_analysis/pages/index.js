import { Heading, Page } from "@shopify/polaris";
import { ResourceList, ResourceItem } from "@shopify/app-bridge-react";



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

      //a list of all the customer's name, id, and emails. Additionally features
      //like filtering and ordering can be added
      <Card>
      <ResourceList
        resourceName={{singular: 'customer', plural: 'customers'}}
        items= SHOW customer_name AS name, customer_id AS id, customer_email AS email,
        OVER month(happened_at) AS month
        FROM customer_analytics
        SINCE -11m
        UNTIL today ORDER
        BY month ASC

        renderItem={(item) => {
          const {id, name, email} = item;

          return (
            <ResourceItem
              id={id}
              email={email}
              accessibilityLabel={`View details for ${name}`}
            >
              <h3>
                <TextStyle variation="strong">{name}</TextStyle>
              </h3>
            </ResourceItem>
          );
        }}
      />
    />

    )
  }


}
export default Index;
