import React from 'react';




class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className='shadow-lg pb-3 mb-5 bg-body rounded reg-acc'>
                <div className='p-3 mb-2 bg-primary text-white position'>
                    <h4>Регистрационный учет</h4>
                    <div className='circle'></div>
                </div>

                <form className='form' onSubmit={this.props.handleSubmit}>
                    <div>
                        <label className="form-label">
                        Фамилия
                        <input className='form-control' type='text' name='surname' placeholder='ВВЕДИТЕ ФАМИЛИЮ' value={this.props.surname} onChange={this.props.handleChange} required  />
                        </label>
                    </div>

                    <div>
                        <label className="form-label">
                        Имя
                        <input className='form-control' type='text' name='name' placeholder='ВВЕДИТЕ ИМЯ' value={this.props.name} onChange={this.props.handleChange} />
                        </label>
                    </div>

                    <div>
                        <label className="form-label">
                        Отчество
                        <input className='form-control' type='text' name='patronymic' placeholder='ВВЕДИТЕ ОТЧЕСТВО' value={this.props.patronymic} onChange={this.props.handleChange} />
                        </label>
                    </div>

                    <div>
                        <label className="form-label">
                        Идентификационный нормер
                        <input className='form-control' type='text' name='identif' placeholder='ВВЕДИТЕ НОМЕР' value={this.props.identif} onChange={this.props.handleChange} required />
                        </label>
                    </div>

                    <div>
                        <label className='form-label doc_series'>
                        Серия
                        <input className='form-control' type='text' name='doc_series' value={this.props.doc_series} onChange={this.props.handleChange} />
                        </label>
                    </div>

                    <div>
                        <label className='form-label doc_num'>
                        № паспорта
                        <input className='form-control' type='number' name='doc_num' value={this.props.doc_num} onChange={this.props.handleChange} />
                        </label>
                    </div>

                    <div>
                        <input className="btn btn-primary btn-width" type='submit' value='Поиск в локальной БД'  onClick={this.props.handleClick} />
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;