import React from 'react';

class CityItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="todo">
                <li
                    className="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500">
                    <div
                        className="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
                        <div className="flex items-center">
                            <div className="text-sm">
                                <p className="font-medium text-gray-900">
                                    Nom de la ville :
                                    <strong>{this.props.city.name}</strong>
                                </p>
                                <p className="font-medium text-gray-900">Nombres d'habitants :
                                    <strong>{this.props.city.population}</strong>
                                </p>
                                <p className="font-medium text-gray-900">Nom du monument :
                                    <strong>{this.props.city.monument}</strong>
                                </p>
                            </div>
                        </div>
                        <div className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                            <button
                                onClick={this.props.onUpdateCity}
                                id={this.props.index}
                                className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                Modifier
                            </button>
                        </div>
                    </div>
                </li>
            </div>
        )
    }

}

export default CityItem;