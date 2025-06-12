# Enhance Prompt

The "Enhance Prompt" feature in Roo Code helps you improve the quality and effectiveness of your prompts before sending them to the AI model.  By clicking the <Codicon name="sparkle" /> icon in the chat input, you can automatically refine your initial request, making it clearer, more specific, and more likely to produce the desired results.

## Why Use Enhance Prompt?

*   **Improved Clarity:**  Roo Code can rephrase your prompt to make it more understandable for the AI model.
*   **Added Context:**  The enhancement process can add relevant context to your prompt, such as the current file path or selected code.
*   **Better Instructions:**  Roo Code can add instructions to guide the AI towards a more helpful response (e.g., requesting specific formatting or a particular level of detail).
*   **Reduced Ambiguity:**  Enhance Prompt helps to eliminate ambiguity and ensure that Roo Code understands your intent.
*   **Consistency**: Roo will consistently format prompts the same way to the AI.

## How to Use Enhance Prompt

1.  **Type your initial prompt:**  Enter your request in the Roo Code chat input box as you normally would.  This can be a simple question, a complex task description, or anything in between.
2.  **Click the <Codicon name="sparkle" /> Icon:**  Instead of pressing Enter, click the <Codicon name="sparkle" /> icon located in the bottom right of the chat input box.
3.  **Review the Enhanced Prompt:**  Roo Code will replace your original prompt with an enhanced version.  Review the enhanced prompt to make sure it accurately reflects your intent. You can further refine the enhanced prompt before sending.
4.  **Send the Enhanced Prompt:**  Press Enter or click the Send icon (<Codicon name="send" />) to send the enhanced prompt to Roo Code.

## Customizing the Enhancement Process

The "Enhance Prompt" feature uses a customizable prompt template.  You can modify this template to tailor the enhancement process to your specific needs.

1.  **Open the Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar.
2.  **Select "ENHANCE" Tab:** You should see listed out support prompts, including "ENHANCE". Click on this tab.
3.  **Edit the Prompt Template:** Modify the text in the "Prompt" field.

The default prompt template includes the placeholder `${userInput}`, which will be replaced with your original prompt. You can modify this to fit the model's prompt format, and instruct it how to enhance your request.

## API Configuration

The API configuration used for Enhance Prompt is, by default, the same one that is selected for Roo Code tasks,
but it can be changed:

1.  **Open the Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar.
2.  **Select "ENHANCE" Tab:** You should see an "API Configuration" dropdown
3.  **Select an API Configuration:** Choose an existing configuration, and future Enhance Prompt requests will be sent to that configured provider/model.

## Limitations and Best Practices

*   **Experimental Feature:**  Prompt enhancement is an experimental feature. The quality of the enhanced prompt may vary depending on the complexity of your request and the capabilities of the underlying model.
*   **Review Carefully:**  Always review the enhanced prompt before sending it.  Roo Code may make changes that don't align with your intentions.
*   **Iterative Process:**  You can use the "Enhance Prompt" feature multiple times to iteratively refine your prompt.
*   **Not a Replacement for Clear Instructions:** While "Enhance Prompt" can help, it's still important to write clear and specific prompts from the start.

By using the "Enhance Prompt" feature, you can improve the quality of your interactions with Roo Code and get more accurate and helpful responses.
