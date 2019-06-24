export const handleFieldChange = function(event){
    const { name, value } = event.target;
    this.setState({
        [name]: value
    })
}