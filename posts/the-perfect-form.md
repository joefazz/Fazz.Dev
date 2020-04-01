---
title: The Perfect Form
published: false
description: How to make one of the worst parts of frontend development slightly easier
tags: react, typescript, xstate
pubdate: 2020-03-31
---

# The Problem

React is really great for any sort of usual single page application shenanigans but when it comes to dealing with forms it is incredibly tedious.

In case you don't know, forms can either be [_controlled_](https://reactjs.org/docs/forms.html) or [_uncontrolled_](https://reactjs.org/docs/uncontrolled-components.html) in React. The only difference is that controlled forms will use the components state to keep track of the values in the inputs and subsequently, the state values will be used during the form submission. Uncontrolled forms will just gather the values of the inputs at the time of submission when they need to be acted on by using [Refs](https://reactjs.org/docs/refs-and-the-dom.html).

Lets say for the sake of argument that you have to make your form controlled, perhaps you want to show the user a super special bit of text if they have a certain email address...

```javascript
state = {
  email: '',
  name: ''
};

// That's right, I've read the React Docs 😎
onChange = (e) => {
  this.setState({ [e.target.name]: e.target.value });
};

// I'm leaving out prevent default because everyone knows you need it anyway
onSubmit = (e) => {
  // Lets say this takes at least 1 second to resolve
  makeNetworkRequest(url, { body: this.state });
}

render() {
  return (
    <form onSubmit={onSubmit}>
      <input name="email" type="email" onChange={onChange} />
      <input name="name" onChange={onChange} />
    </form>
    {this.state.email.includes('@vip.com') &&
      <span>Wow we are honoured to have you here Mr Abramov</span>}
  );
}
```

Well this doesn't look too bad, I've written some code I can pat myself on the back about and ship to prod...

<iframe src="https://giphy.com/embed/3oz8xLd9DJq2l2VFtu" width="480" height="287" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

Validation! Oh yeah that's important, the user doesn't need the server to tell them they forgot to put an @ sign in their email address.

```javascript
state = {
  email: '',
  name: '',
  errorMessage: ''
};

// That's right, I've read the React Docs 😎
onChange = (e) => {
  this.setState({ [e.target.name]: e.target.value });
};

// I'm leaving out prevent default because everyone knows you need it anyway
onSubmit = (e) => {
  if (email.matches(EMAIL_VALIDATION_REGEX)) {
    // Lets say this takes at least 1 second to resolve
    makeNetworkRequest(url, { body: this.state });
  } else {
    this.setState({ errorMessage: 'Your email address is invalid, try typing an email address' });
  }
}

render() {
  return (
    <form onSubmit={onSubmit}>
      <input name="email" type="email" onChange={onChange} />
      <input name="name" onChange={onChange} />
      <button disabled={!email.matches(EMAIL_VALIDATION_REGEX)}>Submit</button>
    </form>
    {this.state.errorMessage !== '' && <span>{errorMessage}</span>}
    {this.state.email.includes('@vip.com') &&
      <span>Wow we are honoured to have you here Mr Abramov</span>}
  );
}
```

Okay great now we can run that, validation works nice, oh...

```javascript
// I'm leaving out prevent default because everyone knows you need it anyway
onSubmit = (e) => {
  // Don't forget this!!
  this.setState({ errorMessage: '' });
  if (email.matches(EMAIL_VALIDATION_REGEX)) {
    // Lets say this takes at least 1 second to resolve
    makeNetworkRequest(url, { body: this.state });
  } else {
    this.setState({ errorMessage: 'Your email address is invalid, try typing an email address' });
  }
};
```

We need to clear the `errorMessage` value otherwise while our network request is resolving it's going to look as though there's an issue with the user's input when there may well not be.

We still haven't even started to cover the neccessary things like loading states, required fields, disabling active button state based on more than just validation.

Without putting another 16 code snippets in here I think you can see how with every extra input and every unit of business logic/client side validation we need to provide this is going to become unwieldy at best and unmaintainable at worst. Not to mention that writing all of this code is absolutely not helping you become a better developer or letting you focus on solving the more fun problems!

If you think that I'm projecting my own opinions here on how badly I rate this process I refer (as we all should) to the holy scripture, the React docs...

> It can sometimes be tedious to use controlled components, because you need to write an event handler for every way your data can change and pipe all of the input state through a React component. This can become particularly annoying when you are converting a preexisting codebase to React, or integrating a React application with a non-React library. In these situations, you might want to check out uncontrolled components, an alternative technique for implementing input forms.

## Example

But wait that doesn't look so bad...
