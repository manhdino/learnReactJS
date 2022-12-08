import React from 'react';
import './Child.scss'
//Statefull Components - Statefull - Class Components
class ChildMyComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnclickDelete = (job) => {
        console.log('>>> handleOnclickDelete: ', job)
        this.props.deleteJob(job)
    }
    render() {
        // console.log('>> Cheack props', this.props)
        // let name = this.props.name
        // let age = this.props.age

        //Cach rut gon truong hop co nhieu props
        let { arrJob } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false'
        console.log('>>>check:', check)
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className='btn-show'
                            onClick={() => this.handleShowHide()}>SHOW</button>
                    </div>
                    :
                    <>
                        <div className='Job-List'>
                            {
                                arrJob.map((item, index) => {
                                    if (item.salary >= 1000) {
                                        return (
                                            <div key={item.id}>
                                                {item.id} - {item.name} - {item.salary} <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                            </div>
                                        )
                                    }
                                    return null;
                                })

                            }
                        </div>
                        <div> <button onClick={() => this.handleShowHide()}>HIDE</button></div>
                    </>}
            </>
        )
    }
}

//Arrow Func - Stateless
// const ChildMyComponent = (props) => {
//     console.log('>>> check child props', props)
//     let { name, age, arrJob } = props;
//     return (
//         <>
//             <div className='Job-Lists'>
//                 <div>
//                     Name:{name}<br />
//                     Age: {age}<br />
//                 </div>
//                 {
//                     arrJob.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.id} - {item.name} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }

//             </div>
//         </>
//     )
// }
export default ChildMyComponent;