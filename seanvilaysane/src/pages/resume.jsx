import React from 'react'
import Layout from '../components/layout'
import '../../public/static/css/resume.css'

class ResumePage extends React.Component {
  handlePrint = () => {
    var myWindow = window.open('', 'Resume', 'width=800, height=600')
    myWindow.document.write(`<iframe
    src="https://docs.google.com/document/d/e/2PACX-1vShfItfp3NVP7l9vHCe9n6KhorFeGihxKYq6lDLroTZphAyXR3hPdSD30mch8HuibvN-BL1YgFGSlz_/pub?embedded=true",
    width="1000" height="1000" frameBorder="0" 
  />`)
    myWindow.document.close()
    myWindow.focus()
    myWindow.print()
    myWindow.close()
  }

  render() {
    return (
      <Layout>
        <div className="ResumePage">
          <button onClick={this.handlePrint}>PRINT</button>
          <iframe
            className="doc"
            src="https://docs.google.com/document/d/e/2PACX-1vShfItfp3NVP7l9vHCe9n6KhorFeGihxKYq6lDLroTZphAyXR3hPdSD30mch8HuibvN-BL1YgFGSlz_/pub?embedded=true"
            frameBorder="1"
          />
        </div>
      </Layout>
    )
  }
}

export default ResumePage
