import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <h2 className="text-primary text-3xl font-bold text-center mt-10 mb-4">
        BLOG POSTS
      </h2>
      <div className="bar"></div>
      <div className="parent_blog">
        <div className="each_blog">
          <h2 className="font-bold mb-4">
            How will you improve the performance of a React Application?
          </h2>
          <p className="text-sm font-semibold">
            Basically, React application runs many sort of techniques to render
            dom operation to update User interface. React contains a lot of
            powerful utilities to make our website very attractive, in this case
            we need to use immutable data structures to boost up the
            performance. It has no side-effect and help prevent temporal
            coupling. Components are more useful in react application but why
            don't we use react pure component than stateless or functional
            components. Html element wrappers is less important than use react
            fragments. It will also boost up the performance.
          </p>
        </div>
        <div className="each_blog">
          <h3 className="font-bold mb-4">
            What are the different ways to manage a state in a React
            application?
          </h3>
          <p className="text-sm font-semibold">
            This is a very common question. Actually without using use state we
            have four types of state in real matter. Local state can manage the
            state in other component and can manage modal component and track
            values for a form component speacially when submi form. For multiple
            component management this is where Global state comes. To update
            date anywhere in app gobal state usually manage it. Server state is
            basically used to integrate external data coming from external
            server. In the complex situation SWR and React Query handle much
            better. And the last we have URL state. Sometime part of website
            data depend on its url in this circumstences url state helps out. So
            basically we have four different state to use for our necessary.
          </p>
        </div>
        <div className="each_blog">
          <h3 className="font-bold mb-4">
            How does prototypical inheritance work?
          </h3>
          <p className="text-sm font-semibold">
            Java script has some methods to use, Prototypal inheritance is one
            of them. Generally this method inherit properties of another object.
            It means, it can be shared extendedly. Java script is a very common
            prototype-capable languages which is almost unique. Actually using
            prototycal inheritance in java script save a lot of developer time.
            It allow us to reuse properties or methods from a java script object
            to another.
          </p>
        </div>
        <div className="each_blog">
          <h3 className="font-bold mb-4">
            Why you do not set the state directly in React. For example, if you
            have const [products, setProducts] = useState([]). Why you do not
            set products = [...] instead, you use the setProducts?
          </h3>
          <p className="text-sm font-semibold">
            useState hooks use this way const [products, setProducts] =
            useState([]); It means when we need to store or keep date in state
            here prodects set all the data here. But setProducts use to reuse
            data as necessary. But if we keep data like this way product = [...]
            it just spreads data. it define the array indexing in java script
            and it contain a index number begins with 0. So basically we keep
            data in second way as store not to counting like the first one.
          </p>
        </div>
        <div className="each_blog">
          <h3 className="font-bold mb-4">
            What is a unit test? Why should write unit tests?
          </h3>
          <p className="text-sm font-semibold">
            Test of unit is a software development process where a minimum
            testable part of application are seperately scrutinized for proper
            operation. It is necessary to vlidate whether each components are
            performs as expected. It find out that portion of code which
            performance is how. A unit can be any method, object, function etc.
            Unit test is a whiteBox testing way which is only perform by
            developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
