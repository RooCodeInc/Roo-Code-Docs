# Linear Integration Demo Video Plan

## Overview
Create a demonstration video showing how Roo Code Cloud integrates with Linear for seamless issue-to-code workflow automation.

**Target Duration:** 3-5 minutes  
**Audience:** Development teams using Linear for issue tracking  
**Goal:** Show how teams can delegate development work directly from Linear issues to Roo Code agents

---

## Key Corrections from Original Instructions

Based on code review, the following corrections have been made to the documentation:

1. **Settings Location:** Integration is configured in **Organization Settings**, not project settings or configurable triggers
2. **Mention Format:** The agent is mentioned as `@Roo Code` or `@roocode` (not `@roo-code`)
3. **Trigger Configuration:** Triggers are **not configurable** - the integration works via:
   - Assigning issues to the "Roo Code" user
   - Mentioning `@Roo Code` in issue comments
4. **Account Linking:** First-time users must link their Linear account to their Roo Code account (one-time authentication flow)

---

## Demo Outline

### 1. Introduction (30 seconds)
**Script:**
> "Integrate your Linear workflow with Roo Code Cloud to automate development tasks directly from your issue tracker. Let's see how it works."

**Show:**
- Quick visual of Linear + Roo Code logos
- Text overlay: "Turn Linear Issues into Pull Requests Automatically"

---

### 2. Setup & Configuration (45 seconds)

**Script:**
> "Setting up is simple. Navigate to Organization Settings in Roo Code Cloud, go to Integrations, and click Connect next to Linear. You'll authorize via OAuth - no API keys needed."

**Show:**
1. Roo Code Cloud dashboard
2. Click user menu → Organization Settings
3. Navigate to Integrations tab
4. Click "Connect" button next to Linear
5. OAuth authorization screen
6. Success message

**Key Points:**
- Organization-level integration
- OAuth authentication (secure, no manual keys)
- Requires Team plan

---

### 3. First-Time Account Linking (30 seconds)

**Script:**
> "The first time you interact with the Roo Code agent in Linear, you'll link your accounts. This one-time step ensures your work is properly tracked."

**Show:**
1. Create a Linear issue
2. Assign to "Roo Code" user
3. Authentication prompt appears in Linear
4. Click authentication link
5. Quick login/confirmation flow
6. Success message in Linear

---

### 4. Assigning Work to Roo Code (60 seconds)

**Script:**
> "Now let's delegate some work. I'll create an issue for adding a dark mode toggle, with clear acceptance criteria. Then I'll assign it to Roo Code just like any other team member."

**Show:**
1. **Create Linear Issue:**
   - Title: "Add dark mode toggle to settings page"
   - Description with acceptance criteria:
     ```
     Add a dark mode toggle to the user settings page.
     
     Requirements:
     - Toggle should persist user preference
     - Theme should apply across the entire app
     - Include support for system theme detection
     ```
   - Assign to "Roo Code"

2. **Agent Response:**
   - "Getting started..." comment appears
   - "Analyzing codebase..." update
   - "Creating implementation plan..." with checklist
   - "Opening PR..." with link

**Key Points:**
- Clear issue descriptions get better results
- Real-time progress updates
- Agent acts like a team member

---

### 5. Mentioning the Agent (45 seconds)

**Script:**
> "You can also interact with Roo Code by mentioning it in comments. Let's add a requirement."

**Show:**
1. Add comment to the issue:
   ```
   @Roo Code Please also add a keyboard shortcut (Cmd+Shift+D) to toggle dark mode
   ```
2. Agent acknowledges: "I'll add keyboard shortcut support..."
3. Updated PR link appears

**Key Points:**
- Use `@Roo Code` or `@roocode` for mentions
- Agent maintains context from previous work
- Can provide feedback at any stage

---

### 6. Reviewing the Pull Request (30 seconds)

**Script:**
> "The agent creates a PR and automatically links it to the Linear issue using the issue identifier in the branch name. Now you can review, test, and merge through your normal GitHub workflow."

**Show:**
1. Click PR link from Linear issue
2. Show GitHub PR with:
   - Branch name includes issue ID (e.g., `ROO-123/add-dark-mode-toggle`)
   - Code changes
   - Tests included
   - Linked back to Linear issue
3. Show Linear issue updates automatically when PR is merged

---

### 7. Getting Recommendations (30 seconds)

**Script:**
> "Not ready to implement yet? Ask for consultation first."

**Show:**
1. Create new issue: "Improve authentication middleware performance"
2. Add comment:
   ```
   @Roo Code What's the best approach to improve our auth middleware performance? Consider our current architecture.
   ```
3. Agent responds with analysis and recommendations (no code changes)

**Key Points:**
- Use agent as a consultant before committing to implementation
- Agent analyzes your codebase for context-aware recommendations

---

### 8. Stopping Work (15 seconds)

**Script:**
> "Need to halt work? Use the stop signal from Linear's agent session UI."

**Show:**
1. Active agent session in Linear
2. Click stop button
3. Agent confirms: "Work has been stopped as requested."

---

### 9. Key Benefits Summary (30 seconds)

**Script:**
> "With the Linear integration, you get native issue-to-code automation, full visibility into agent work, automatic PR linking, and seamless team collaboration - all without leaving Linear."

**Show:**
- Split screen showing Linear and GitHub
- Text overlays with key benefits:
  - ✓ Work where you plan
  - ✓ Full progress visibility
  - ✓ Automatic PR linking
  - ✓ Team collaboration built-in
  - ✓ Requires Team plan

**End Screen:**
- "Try Roo Code Cloud with Linear"
- Link: app.roocode.com
- Call to action: "Start with Team Plan"

---

## Recording Notes

### Environment Setup
- Clean Linear workspace with sample project
- Connected GitHub repository with simple codebase
- Roo Code Cloud account with Team plan
- Prepare issues in advance but show creation process

### Technical Requirements
- Screen recording software (Loom, OBS, or similar)
- Clear audio (voiceover or narration)
- 1920x1080 or higher resolution
- Smooth cursor movements
- Fast-forward waiting periods (agent processing, PR creation)

### Production Tips
1. **Pre-create the Linear project** with appropriate naming
2. **Use a demo repository** with realistic but simple code
3. **Speed up waiting periods** (2-4x) during agent processing
4. **Add text overlays** for key points and corrections
5. **Include captions** for accessibility
6. **Keep branding consistent** with existing Roo Code materials

---

## Post-Production Checklist

- [ ] Add intro/outro with Roo Code branding
- [ ] Include captions/subtitles
- [ ] Add background music (subtle, non-distracting)
- [ ] Ensure all sensitive data is removed (tokens, API keys)
- [ ] Export in multiple resolutions (1080p, 720p)
- [ ] Create thumbnail with clear value proposition
- [ ] Prepare description with:
  - Documentation link
  - Setup instructions
  - Team plan information
  - Support/contact information

---

## Distribution Channels

1. **YouTube** - Main hosting platform
2. **Docs site** - Embed in Linear integration documentation
3. **Social media** - Twitter/X, LinkedIn clips
4. **Email newsletter** - Announcement to existing users
5. **Landing page** - Feature on Linear integration page

---

## Follow-Up Content Ideas

- **Written tutorial** mirroring the video
- **GIF demos** for specific workflows (assigning, mentioning)
- **Troubleshooting guide** for common issues
- **Comparison matrix** vs manual development workflow
- **Customer testimonials** from teams using the integration

---

## Metrics to Track

- Video views and watch time
- Documentation page visits
- Linear integration connections (conversion)
- Team plan upgrades after viewing
- Support tickets related to Linear integration
