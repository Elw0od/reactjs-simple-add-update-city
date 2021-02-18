import React from 'react';

// Ville / Nombres d'habitants / Monument

class FormCity extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: null,
            name: '',
            population: 0,
            monument: ''
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.state.name === '' || this.state.population <= 0 || this.state.monument === "") 
            return;
        let cityItem = {
            index: this.state.index,
            name: this.state.name,
            population: this.state.population,
            monument: this.state.monument

        }
        this.setState({index: null});
        this.setState({name: ''});
        this.setState({population: ''});
        this.setState({monument: ''});

        this
            .props
            .onAddCity(cityItem);
    }

    // Déprécié !!!!!! Est-ce que tu connais une autre fonction ? Oui toi Mr le prof
    // ! :)
    componentWillReceiveProps(props) {
        if (props.city != null) {
            this.setState({index: props.city.index})
            this.setState({name: props.city.name})
            this.setState({population: props.city.population})
            this.setState({monument: props.city.monument})
        }
    }

    render() {
        return (
            <form className="grid grid-cols-1 gap-y-6">
                <div>
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        required
                        className="block border mb-5 w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                        placeholder="Ajouter un nom"/>
                    <input
                        type="number"
                        name="population"
                        onChange={this.handleChange}
                        value={this.state.population}
                        required
                        className="block border mb-5 w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                        placeholder="Ajouter le nombres d'habitants"/>
                    <input
                        type="text"
                        name="monument"
                        onChange={this.handleChange}
                        value={this.state.monument}
                        required
                        className="block border mb-5 w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                        placeholder="Ajouter un momument"/>
                </div>
                <div>
                    <button
                        type="submit"
                        onClick={this.handleSubmit}
                        className="inline-flex left justify-center mt-3 py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Ajouter
                    </button>
                </div>
            </form>
        );
    }

}

export default FormCity;