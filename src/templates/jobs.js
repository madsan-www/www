import { graphql, navigate } from 'gatsby';
import React from 'react';
// import Dropzone from 'react-dropzone'
function encode(data) {
  const formData = new FormData()


  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}
const Jobs = props => {
  const post = props.data.markdownRemark;
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value, })
  }

  const handleAttachment = (e) => {
    setState({ ...state, [e.target.name]: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  // const image = post.frontmatter.image

  return (
    <>
      <section className="relative">
        <div className="absolute inset-0">
          {/* <img className="w-full h-full object-cover" src={image} width="1440" height="394" alt={post.frontmatter.title} /> */}
          <div className="absolute inset-0 bg-gray-900 " aria-hidden="true"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-extrabold text-white leading-tight tracking-tighter mb-4" data-aos="fade-up">
                {post.frontmatter.title}</h1>
              {post.frontmatter.description &&
                <p className="text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">
                  {post.frontmatter.description}
                </p>
              }
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto pb-6 md:pb-6">
              <div className="text-xl text-gray-400 prose" dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </div>
          </div>
        </div>
        <h3 className="h3 text-4xl text-center m-auto font-extrabold text-white leading-tight tracking-tighter mb-4 -mt-4" data-aos="fade-up">
          Apply</h3>
        <section>
          <div className="max-w-6xl mx-auto">
            <div className="py-12 md:py-20">
              <div className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3" data-aos-id-team>
                <div>
                  <form
                    name={`Job Applied: ${post.frontmatter.title} `}
                    method="post"
                    action="/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="max-w-xl mx-auto p-12 rounded-lg bg-gray-900 ">
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                        {/* <input type="hidden" name="form-name" value="file-upload" /> */}
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">Name <span className="text-red-600">*</span></label>
                        <input required name="first-name" type="text" className="form-input w-full text-gray-300 border-red-500 focus:border-red-500" placeholder="Enter your first name" onChange={handleChange} />
                        {/* <p className="text-red-500 text-sm mt-2">Gerekli alan</p> */}
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="last-name">Surname <span className="text-red-600">*</span></label>
                        <input required name="last-name" type="text" className="form-input w-full text-gray-300" placeholder="Enter your last name" onChange={handleChange} />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                        <input required name="email" type="email" className="form-input w-full text-gray-300" placeholder="Enter your email address" onChange={handleChange} />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4 hidden">
                      <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="subject">Subject</label>
                        <input id="subject" type="text" className="form-input w-full text-gray-300" placeholder={post.frontmatter.title} onChange={handleChange} />
                      </div>
                    </div>
                    {/* <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                      {({ getRootProps, getInputProps, acceptedFiles }) => (
                        <section 
                        className={`mt-8 w-full flex items-center justify-center rounded-lg border-2 border-dashed cursor-pointer
                      ${acceptedFiles.length ? 'border-green-300' :  'border-gray-300'  }
                        text-sm font-medium py-4`}>
                          <div {...getRootProps()}>
                            <input {...getInputProps()} onChange={handleChange} type="file" name="file" type value={acceptedFiles}  />
                            <p className="text-gray-300"> {acceptedFiles.length  ? "File uploaded." : "Drag your file here, or click to select files"}</p>
                          </div>
                        </section>
                      )}
                    </Dropzone> */}
                    {/* <input  type ="file" name="file" /> */}


                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6  rounded-md  " >
                      <div className="space-y-1 text-center">
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer text-center m-auto rounded-md font-medium text-indigo-600 focus-within:outline-none "
                          >
                            {/* <span className="text-gray-300">Click to upload a file</span> */}
                            {/* <input id="file-upload" name="file-upload" type="file" /> */}
                            {/* <input id="file-upload" type="file" name="file" className="sr-only"  onChange={handleChange}  /> */}
                            {/* <input id="file-upload" name="file-upload" type="file"  /> */}
                            <div className='text-gray-300 text-xs m-auto text-center'>
                              <input type="file" name="file" onChange={handleAttachment} />
                            </div>

                          </label>

                        </div>
                        <p className="text-xs text-gray-500">PDF, Word docs up to 2MB</p>
                      </div>
                    </div>


                    {/* <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="message">Mesajınız</label>
                        <textarea id="message" rows="4" className="form-textarea w-full text-gray-300" placeholder="Write your message"></textarea>
                      </div>
                    </div> */}
                    <div className="flex flex-wrap -mx-3 mb-4 mt-8">
                      <div className="w-full px-3">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-gray-400 ml-2">I agree to the privacy policy</span>
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-6">
                      <div className="w-full px-3">
                        <button type="submit" className="btn text-white bg-red-600 hover:bg-red-700 w-full">Apply</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section >
      </section >
    </>
  );
};

export const query = graphql`
  query Jobs($locale: String!, $title: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        description
        image
      }
      html
    }
  }
`;

export default Jobs;
