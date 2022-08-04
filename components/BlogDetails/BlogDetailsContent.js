import React, { useState, useEffect } from "react";
import Link from "next/link";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import SanityBlockContent from "@sanity/block-content-to-react";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import BlogSideBar from "/components/Blog/BlogSideBar";

const initialFormData = Object.freeze({
  name: "",
  email: "",
  comment: "",
});

function BlogDetailsContent({ details }) {
  const [publishDate, setPublishDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, updateFormData] = React.useState(initialFormData);

  useEffect(() => {
    const client = sanityClient(details.sanityConfig);
    const builder = imageUrlBuilder(client);
    const publishedAtObj = new Date(details.publishedAt);
    const momentObj = moment(publishedAtObj);
    setPublishDate(momentObj.format("MMMM Do YYYY, h:mm:ss a"));
    setImageUrl(builder.image(details.image));
  }, [details]);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const client = sanityClient(details.sanityConfig);

    const comment = {
      _type: "comment",
      post: {
        _type: "reference",
        _ref: details._id,
      },
      name: formData.name,
      email: formData.email,
      comment: formData.comment,
    };

    await client
      .create(comment)
      .then((res) => {
        setIsSubmitting(false);
        toast.success("Comment submitted successfully.", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((err) => {
        setIsSubmitting(false);
        toast.success("Comment submission failed.", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };
  return (
    <>
      <div className="blog-area blog-ptb-100">
        <div className="container">
          <ToastContainer />

          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img src={imageUrl} alt="image" />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        <Link href="#">
                          <a>{publishDate}</a>
                        </Link>
                      </li>
                      <li>
                        <span>Posted By:</span>
                        <Link href="/blog">
                          <a>{details.author}</a>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <h3>{details.title}</h3>
                  <SanityBlockContent
                    projectId="zs1hmjkw"
                    dataset="production"
                    blocks={details.body}
                  />
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="fas fa-bookmark"></i>
                    </span>
                    <Link href="/blog-">
                      <a>Fashion,</a>
                    </Link>
                    <Link href="/blog">
                      <a>Games,</a>
                    </Link>
                    <Link href="/blog">
                      <a>Travel</a>
                    </Link>
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <span>Share:</span>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <Link href="https://www.twitter.com/">
                          <a target="_blank">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.linkedin.com/">
                          <a target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.instagram.com/">
                          <a target="_blank">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="comments-area">
                  <h3 className="comments-title">
                    {details.comments.length == 0 || details.comments.length > 1
                      ? `${details.comments.length} Comments`
                      : `${details.comments.length} Comment`}
                  </h3>

                  <ol className="comment-list">
                    {details.comments.length > 0
                      ? details.comments.map((comment, index) => (
                          <li className="comment" key={index}>
                            <article className="comment-body">
                              <footer className="comment-meta">
                                <div className="comment-author vcard">
                                  <img
                                    src="/images/client-image/client2.jpg"
                                    className="avatar"
                                    alt="image"
                                  />
                                  <b className="fn">{comment.name}</b>
                                  <span className="says">says:</span>
                                </div>
                                <div className="comment-metadata">
                                  {moment(new Date(comment._createdAt)).format(
                                    "MMMM Do YYYY, h:mm:ss a"
                                  )}
                                </div>
                              </footer>

                              <div className="comment-content">
                                <p>{comment.comment}</p>
                              </div>
                            </article>
                          </li>
                        ))
                      : ""}
                  </ol>

                  <div className="comment-respond">
                    <h3 className="comment-reply-title">Leave a Reply</h3>

                    <form className="comment-form" onSubmit={handleSubmit}>
                      <p className="comment-notes">
                        <span id="email-notes">
                          Your email address will not be published.
                        </span>
                        Required fields are marked
                        <span className="required">*</span>
                      </p>

                      <p className="comment-form-author">
                        <label>
                          Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          onChange={handleChange}
                        />
                      </p>
                      <p className="comment-form-email">
                        <label>
                          Email <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          onChange={handleChange}
                        />
                      </p>
                      <p className="comment-form-comment">
                        <label>Comment</label>
                        <textarea
                          name="comment"
                          id="comment"
                          rows="5"
                          onChange={handleChange}
                        ></textarea>
                      </p>
                      <p className="form-submit">
                        <input
                          type="submit"
                          name="submit"
                          id="submit"
                          className="submit"
                          value={isSubmitting ? "Posting..." : "Post Comment"}
                        />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSideBar
                popularPosts={details.recent.slice(0, 3)}
                recent={details.recent}
                categories={details.categories}
                sanityConfig={details.sanityConfig}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetailsContent;
