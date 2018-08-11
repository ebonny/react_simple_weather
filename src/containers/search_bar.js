/**
 * 컨테이너 : Action Creator 를 호출하여 어플리케이션 스테이트에 접근한다.
 * 주요 구문
 * - ActionCreator 와 컨테이너를 연결 (map~~ 선언)
 * - props 로 액션을 사용할수 있게 연결 (connect)
 * - 실제로 액션생성자를 호출 (this.props.xxx)
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from "../actions/index";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term:''});   // ★ 검색 완료후 인풋 초기화 !!

    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="blah blah~"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    // 이렇게 콜백함수를 바로 선언할 경우 event 가 자동으로 넘어가지만 생성자에서 bind 를 해줘야 리액트컴포넌트를 가리키는 this 를 사용할 수 있다.
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
// 첫번째 인자가 null : 두번째 인자로 mapDispatch.. 를 보내기 위함.
// 왜? 리덕스가 스테이트를 유지하고 있으니 컨테이너가 이에 대해 신경쓸필요가 없다. 여기에 어떤 스테이트도 필요없다.