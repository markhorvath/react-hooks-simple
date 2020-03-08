import React from 'react';
import useResources from './useResources';



const ResourceList = ({ resource }) => {
    const resources = useResources(resource);

    // const fetchResource = async () => {
    //     const response = await axios.get(
    //         `https://jsonplaceholder.typicode.com/${resource}`
    //     );

    //     setResources(response.data);
    // };

    //this is a nasty syntax but it's how you use an async await function inside useEffect
    //essentially just turn it into an immediately invoked function (IIFE)
    // useEffect(() => {
    //     // fetchResource(resource)
    //     (async resource => {
    //         const response = await axios.get(
    //             `https://jsonplaceholder.typicode.com/${resource}`
    //         );

    //         setResources(response.data);
    //     })(resource);
    //     },
    // [resource]
    // );

    return (
        <div>
            <ul>
            {resources.map(record => <li key={record.id} >{record.title}</li>)}
            </ul>
        </div>
    )
}

// class ResourceList extends React.Component {
//     state = { resources: [] };

//     async componentDidMount() {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

//         this.setState({ resources: response.data });
//     }

//     render() {
//         return <div>{this.state.resources.length}</div>;
//     }
// }



export default ResourceList;