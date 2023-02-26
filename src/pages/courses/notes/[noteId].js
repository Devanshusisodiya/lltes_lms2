import Link from "next/link"
import axios from "axios"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Script from "next/script"

function Notes({ chapters }) {

  const router = useRouter()

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(router.query.lid);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const selectedChapter = chapters[selectedChapterIndex];

  
  return(
    <>
    <Script
        type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML"
      ></Script>
      <div>
            <div style={{ backgroundColor: 'gray', height: '50px' }}>
              {/* <Navbar2 /> */}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
        {isSidebarOpen && (
          <div  className='ml-3 px-3 rounded-xl bg-[#E7DFF9]/60' style={{ height: '1000px', width: '250px', background: '' }}>
            <button className='mt-3' onClick={handleToggleSidebar}>
              <img className='h-6 w-6 rounded-full' src='/close.png' alt="Toggle Sidebar" />
            </button>
            <ul>
        {chapters.map((chapter, index) => (
          <li 
            key={index}
            className={`ml-3 px-3 py-1 hover:bg-[#e8f1f2] ${index !== selectedChapterIndex ? 'cursor-pointer' : ''}`}
            style={{ fontSize: '14px', marginBottom: '10px', borderBottom: '1px solid black' }}
          >
            <Link href={{pathname: `/courses/notes/${router.query.noteId}`, query: {lid: index}}} passHref legacyBehavior><a target="_blank" rel="noreferrer" > {chapter.title} </a></Link>
          </li>
        ))}
      </ul>
          </div>
        )}
        <div style={{ flex: 1, marginLeft: isSidebarOpen ? '250px' : '0', transition: 'margin 0.2s' }}>
          <button className='ml-4 mt-3 py-6' onClick={handleToggleSidebar} style={{ display: isSidebarOpen ? 'none' : 'block' }}>
            <img className='h-6 w-6 rounded-full' src='/menu.png' alt="Toggle Sidebar" />
          </button>
          <h1 className='ml-3 px-3 text-center mt-8 text-xl'>{selectedChapter.title}</h1>
          <div className='ml-3 px-3 text-center mt-8 text-md' style={{ fontSize: '20px', marginTop: '20px' }} dangerouslySetInnerHTML={{ __html: selectedChapter.contents }}></div>
        </div>
      </div>
          </div>
    </>
  )
}

export async function getServerSideProps(context){
  const { params } = context

  try {
    const response = await axios.post(
      "https://back-test1.azurewebsites.net/api/getLesson?code=ozBG20jiEQGcV_BWUqBysnPkr4sonuhulA2UvwA4Lv6KAzFuQXUAgg==",
      {lessoncid: params.noteId}
      )
    const lessons = await response.data

    return {
      props: {
        chapters: lessons
      }
    }
  } catch (error) {
    return {
      props: {
        chapters: error
      }
    }
  }
}

export default Notes