import React from 'react';
import ChildMyComponent from './ChildMyComponent';
import SplitComponents from './AddComponents';
class MyComponent extends React.Component {
    // state = {
    //     name: 'Dinomanh',
    //     channel: 'Hoi Dan IT'
    // }

    // handleOnChangeName = (event) => {
    //     // console.log(event.target.value, 'event target: ', event.target, 'event obj', event)
    //     this.setState({
    //         name: event.target.value,
    //         channel: 'Youtobe'
    //     })
    // }

    // handleClickButton = () => {
    //     console.log('Hit the btn')
    //     alert('Clicked')
    // }

    state = {
        arrJob: [
            { id: '123', name: 'Front-end', salary: '500' },
            { id: '345', name: 'Back-end', salary: '1000' },
            { id: '456', name: 'Tester', salary: '2000' }
        ]
    }
    // handleChangeFirstName = (event) => {
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }
    // handleChangeLastName = (event) => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }
    // handleSumbit = (event) => {
    //     event.preventDefault()
    //     console.log('>>>> check data input: ', this.state)
    // }

    addNewJob = (job) => {
        //C2: 
        // let currentJobs = this.state.arrJob;
        // currentJobs.push(job)
        this.setState({
            arrJob: [...this.state.arrJob, job] //C1
            // arrJob: currentJobs C2
        })
        console.log('check job from parent: ', job)
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJob;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJob: currentJobs
        })
        console.log('Check delete from parent:', job)
    }

    // componentDidMount() {// Dung de goi API phia back-end lay data
    //     console.log('>>> Run Component did mount')
    // }

    // componentDidUpdate(prevProps, PrevState) {
    //     console.log('>>> Run did update: ', 'PrevState', PrevState, 'CurrState', this.state)
    // }
    render() {
        console.log('>> Call render', this.state)
        // let name = 'Dinomanh';
        // return (
        //     <>

        //         <div className='First'>
        //             {console.log('My name is: ', this.state.name)}

        //             <input value={this.state.name} type="text"
        //                 onChange={(event) => this.handleOnChangeName(event)}>
        //             </input>

        //         </div>

        //         <div className='Second'>
        //             Hello my component, My name is {this.state.name}
        //         </div>
        //         <div>
        //             My youtobe channel: {this.state.channel}
        //         </div>

        //         <div className='Third'>
        //             <button onClick={this.handleClickButton} >
        //                 Click here
        //             </button>

        //         </div>

        //     </>

        // )
        return (
            <>
                <SplitComponents
                    addNewJob={this.addNewJob} />
                <ChildMyComponent
                    arrJob={this.state.arrJob}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}


export default MyComponent;