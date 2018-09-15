import * as React from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"

const SUBMIT_RESULT = gql`
  mutation submitmatch($text: String!) {
    submitmatch(text: $text) {
      text
      author {
        id
        email
        username
      }
    }
  }
`

class CreateTweetForm extends React.Component {
  render() {
    let input

    return (
      <div>
        <Mutation mutation={SUBMIT_RESULT}>
          {(submitmatch, { data }) => {
            return (
              <div>
                <form
                  onSubmit={async e => {
                    e.preventDefault()
                    await submitmatch({
                      variables: {
                        text: input.value
                      }
                    })
                    this.props.refetchFeedTweets()
                    input.value = ""
                  }}
                >
                  <input
                    ref={node => {
                      input = node
                    }}
                  />
                  <button type="submit">Tweet!</button>
                </form>
              </div>
            )
          }}
        </Mutation>
      </div>
    )
  }
}

export default CreateTweetForm
