import React from "react";

const Blogs = () => {
  return (
    <div className="md:my-16 my-5 px-5 md:px-28">
      <div className="my-10">
        <h1 className="text-3xl font-bold text-orange-600 my-5">
          What is context api ?
        </h1>
        <p className="text-xl text-gray-500">
          In React application, we passed data in a top-down props. Sometimes it
          is inconvenient for certain types of props that are required by many
          components . Context provides a way to pass values between components
          without explicitly passing a prop through every level of the component
          tree.Props drilling is a term to describe when you pass props down
          multiple levels to a nested component, through components that don't
          need it.Any real-world React app is going to need to share state, or
          data, between different components at different levels of the React.js
          hierarchy. They also need to share functions that can act on or change
          that data.
        </p>
      </div>
      <div className="my-10">
        <h1 className="text-3xl font-bold text-orange-600 my-5">
          What is Semantic tag ?
        </h1>
        <p className="text-xl text-gray-500">
          Semantic HTML5 addresses this shortcoming by defining specific tags to
          indicate clearly what role is played by the content those tags
          contain. That explicit information helps robots/crawlers like Google
          and Bing to better understand which content is important, which is a
          subsidiary, which is for navigation, and so on. In the previous
          versions of HTML, the generic{" "}
          <span className="text-rose-700">div</span> tag with an id or class
          attribute was used for structuring a web page. For example, for
          defining sidebars, footers, menu or other structural blocks, the
          <span className="text-rose-700">div</span> tag was used with the
          corresponding meaning (div class="footer"). Semantic elements in HTML
          have intrinsic meaning and convey that meaning both to the browser and
          the developer. They clearly define what kind of content they contain
          (for example, the <span className="text-rose-700">footer</span> tag is
          used instead of <span className="text-rose-700">div</span> ).
        </p>
      </div>
      <div className="my-10">
        <h1 className="text-3xl font-bold text-orange-600 my-5">
          Deference between inline , block and inline-block tag ?
        </h1>
        <div>
          <h1 className="text-3xl text-yellow-800 my-3">Inline element :</h1>
          <p className="text-xl text-gray-500">
            Inline elements are those that don’t start with the new line. Also,
            it doesn’t take full-width space on the webpage. That kind of
            element only occupies as much space as required to fit included
            elements. Like , <span className="text-rose-700">span</span> element
            work as a container for included text in HTML. Most of the time,
            inline elements used within another HTML element.
          </p>
        </div>
        <div>
          <h1 className="text-3xl text-yellow-800 my-3">Block element :</h1>
          <p className="text-xl text-gray-500">
          A block-level element is an HTML element that starts on a new line and takes up the full available width of its parent element’s horizontal space. This kind of element creates blocks of content (paragraphs, page divisions). The majority of HTML elements are block-level elements.Like <span className="text-rose-700">P</span> tag ,<span className="text-rose-700">div </span> tag .


          </p>
        </div>
        <div>
          <h1 className="text-3xl text-yellow-800 my-3">Inline Block element :</h1>
          <p className="text-xl text-gray-500">
          HTML has another type of element called In-Line Block Elements.Mainly it will focus on the inline-block elements there is a slight difference between inline and inline-block elements is allowed the user to set width, the height of the Html elements also we have customized the top, bottom and display the content will be inline-block and also paddings will be initialized if the requirements needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
