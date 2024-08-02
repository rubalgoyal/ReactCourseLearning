function ImageShow({image}) {

    return <div>
        <img src={image.urls.small} alt={image.alt_description} />
        </div>;
}

export default  ImageShow;

/* To apply updates 
    1. Apply a "Key" to each element during the mapping step. (We do this step)
    2. After re-rendering, compare the keys on each ImageShow to the keys from the previous rener. (React do this)
    3. Apply minimal set if changes to existing DOM elements.(React do this)
*/
