import React from 'react'

import Page from '../components/Page'
import CodeSnippet from '../elements/CodeSnippet'

import '../styles/pages/JsDocTypes.scss'

const JsDocTypes = () =>
  <Page id='jsdoc' className='blog'>
    <div className='block'>
      <h1>
        Cheatsheet:{' '}
        <a href='https://jsdoc.app/tags-type.html' target='_blank'>
          JSDoc
        </a>{' '}
        types
      </h1>

      <CodeSnippet>
        {`/**
* The different types accepted by JSDoc for parameters.
* @param {number} x - How many times I've had to look this up.
*/
`}
      </CodeSnippet>

      <h2>The basics</h2>

      <ul className='flex'>
        <li>null</li>
        <li>undefined</li>
        <li>boolean</li>
        <li>number</li>
        <li>string</li>
        <li>Object</li>
        <li>Array</li>
      </ul>

      <h2>Edge cases</h2>
      <table>
        <tbody>
          <tr>
            <td>optional</td>
            <td>
              {'@param {string}'} [label] - We can go without
            </td>
          </tr>
          <tr>
            <td>list</td>
            <td>
              {'@param {number[]}'} fib - Better than the last two
              variables combined
            </td>
          </tr>
          <tr>
            <td>multiple types</td>
            <td>
              {'@param {string|number}'} age - We can handle a string
            </td>
          </tr>
          <tr>
            <td>object properties</td>
            <td>
              {'@param {number}'} family.children - Dogs don't count
            </td>
          </tr>
          <tr>
            <td>wildcard</td>
            <td>
              {'@param {*}'} gender - No binaries here
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Page>

export default JsDocTypes