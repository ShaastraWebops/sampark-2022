import React from 'react'
import '../../Styles/Helpdesk.css'
import { IoIosSearch, IoIosSend } from 'react-icons/io'
import { AiFillCaretDown } from 'react-icons/ai'
import Title from '../Shared/Title'

function Helpdesk() {
  const [faqs, setFaqs] = React.useState([
    {
      no: 0,
      question:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
    },
    {
      no: 1,
      question:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
    },
    {
      no: 2,
      question:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
    },
  ])

  const [show, toggleShow] = React.useState([false, false, false])
  const [faqQuestion, setfaqQuestion] = React.useState('')
  const [newQuestion, setnewQuestion] = React.useState('')

  return (
    <div className='helpdesk'>
      <Title title='HELPDESK' isHomePage={true} />
      <div>
        <form className='search-bar'>
          <input
            className='input-ctn'
            placeholder='Search for existing question'
            value={faqQuestion}
            onChange={(e) => setfaqQuestion(e.target.value)}
          ></input>
          <button className='button-ctn'>
            <IoIosSearch className='form-icon' />
          </button>
        </form>
      </div>
      <div className='faq'>
        {faqs.map((faq) => {
          return (
            <div
              className='question'
              onClick={() => {
                let index = 0
                toggleShow(
                  show.map((s) => {
                    if (faq.no === index++) {
                      return !show[faq.no]
                    } else return s
                  })
                )
              }}
            >
              <span className='top'>
                <h3>{faq.question}</h3>
                <span
                  style={
                    show[faq.no]
                      ? {
                          transform: 'rotate(-90deg)',
                          transition: '0.5s',
                        }
                      : {
                          transform: 'rotate(0deg)',
                          transition: '0.5s',
                        }
                  }
                  className='down-arrow'
                >
                  <AiFillCaretDown className='form-icon' />
                </span>
              </span>
              <span
                style={
                  show[faq.no]
                    ? {
                        height: 'max-content',
                        paddingTop: '15px',
                      }
                    : {
                        height: '0px',
                        paddingTop: '0px',
                      }
                }
                className='panel'
              >
                <p className='answer'>{faq.answer}</p>
              </span>
            </div>
          )
        })}
      </div>
      <div>
        <form className='question-ctn'>
          <input
            className='input-ctn'
            placeholder='Post your question'
            value={newQuestion}
            onChange={(e) => setnewQuestion(e.target.value)}
          ></input>
          <button className='button-ctn'>
            <IoIosSend className='form-icon' />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Helpdesk
