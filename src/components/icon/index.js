
import Heart from "./heart";

function Index({name, ...props}) {
  switch(name) {
    case 'heart': {
      return <Heart {...props} />
    }
    default: {
      return null;
    }
  }
}

Index.defaultProps = {
  size: 16,
  color: "#fff"
}

export default Index;