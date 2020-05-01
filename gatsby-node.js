const path = require('path')
//create pages dynamically
exports.createPages = async({graphql, actions}) => {
const {createPage} = actions
const result = await graphql(`
query Getproducts {
    products:allContentfulProduct {
      nodes {
        slug
      }
    }
  }`)
  const allnodes = await graphql(`
query get_nodes {
  allNode {
    nodes {
      id
      data {
        title
        url
        nid
      }
    }
  }
}
`)
//console.log(JSON.stringify(result));
  result.data.products.nodes.forEach((product)=> {
      createPage({
        path: `/products/${product.slug}`,
        component:path.resolve(`src/templates/product-template.js`),
        context: {
          slug: product.slug,
        },

      })
  });


  //console.log(JSON.stringify(result));
  allnodes.data.allNode.nodes.forEach((nodesresult)=> {
    console.log(nodesresult);
    createPage({
      path: `/node/${nodesresult.data.nid}`,
      component:path.resolve(`src/templates/node-template.js`),
      context: {
        node_id: nodesresult.data.nid,
      },

    })
});
}