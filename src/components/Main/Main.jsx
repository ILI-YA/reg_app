import React from 'react';
import Result from './Result'
import NoEntries from './NoEntries'






class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: 1,
            todosPerPage: 5
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
    }
          
    render () {

        const { currentPage, todosPerPage } = this.state;
  
         
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.props.items.slice(indexOfFirstTodo, indexOfLastTodo);
  
        // display Todos
        const isLoggedIn = this.props.isLog;
        let data;

        if (isLoggedIn) {
            data = currentTodos.map((item, index) => {
                return (
                    <div key={index}>
                        <Result 
                            surname={item.surname} 
                            name={item.name}
                            sname={item.sname}
                            bdate={item.bdate}
                            identif={item.identif}
                            addressLast={item.addressLast.typeCityL + ' ' + item.addressLast.cityL + ' ' + item.addressLast.typeStreetL + ' ' + item.addressLast.streetL + ' ' + item.addressLast.house + ', ' + item.addressLast.app}
                            ateAddress={item.ateAddress}
                            dsdDateRec={item.dsdDateRec}
                        />
                    </div>
                )
            });
        } else {
            data = <NoEntries />;
        };
  
        // display pageNumber  
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.items.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }
  
        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <li  className="page-item page-link active"
                key={number}
                id={number}
                onClick={this.handleClick}
              >
                {number}
              </li>
            );
        });

        


        return (
            <div className='main'>
                <nav className='shadow-lg pb-3 mb-3 bg-body rounded main-nav'>
                <a className='main-nav-a' href='/'>Главная</a>
                </nav>

                <div className='main-container'>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">&#128269; Поиск</span>
                        <input type="text" className="form-control search"  aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className='table'>
                        <div className='table-head'>
                            <span>Результаты поиска</span>
                        </div>

                        <div className='div-row'>
                            <div className='div-col'>Фамилия</div>
                            <div className='div-col'>Имя</div>
                            <div className='div-col'>Отчество</div>
                            <div className='div-col'>Дата рождения</div>
                            <div className='div-col'>Идентификационный номер</div>
                            <div className='div-col'>Адрес регистрации (после конвертации)</div>
                            <div className='div-col'>Адрес регистрации (коды АТЕ и ТЕ)</div>
                            <div className='div-col'>Дата регистрации</div>
                        </div>

                        {data}

                        <div className='table-head'>
                            <nav aria-label="Page navigation example">
                                <ul id="page-numbers" className="pagination justify-content-center">
                                    <li className="page-item page-link active" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </li>
                                    {renderPageNumbers}
                                    <li className="page-item page-link active" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default Main;