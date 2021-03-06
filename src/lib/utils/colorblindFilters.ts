// Links to read more about the filters and where they come from
// https://developer.chrome.com/blog/cvd/
// https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html

export const colorblindFilters = {
  // The filter grayscale matrix is based on the following research paper:
  // Rang Man Ho Nguyen and Michael S. Brown,
  // “Why You Should Forget Luminance Conversion and Do Something Better”.
  // IEEE Conference on Computer Vision and Pattern Recognition (CVPR),
  // Honolulu, HI, 2017. pp. 6750-6758.
  // https://openaccess.thecvf.com/content_cvpr_2017/papers/Nguyen_Why_You_Should_CVPR_2017_paper.pdf
  // ****** THIS IS THE FILTERS USED BY GOOGLE CHROME DEV TOOLS ******
  achromatopsia: {
    html: `
        <svg viewBox="0 0 600 400" width="0" height="0" xmlns:xlink="http://www.w3.org/1999/xlink">
          <filter id="achromatopsia">
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="0.213  0.715  0.072  0.000  0.000
                        0.213  0.715  0.072  0.000  0.000
                        0.213  0.715  0.072  0.000  0.000
                        0.000  0.000  0.000  1.000  0.000"/>
              </feColorMatrix>
      </filter>
        </svg>`,
    css: `
        * {
          filter: url(#achromatopsia);
        }`,
    name: 'achromatopsia',
    description: 'Achromatopsia (total colorblind)',
  },
  // The filter color matrices are based on the following research paper:
  // Gustavo M. Machado, Manuel M. Oliveira, and Leandro A. F. Fernandes,
  // “A Physiologically-based Model for Simulation of Color Vision Deficiency”.
  // IEEE Transactions on Visualization and Computer Graphics. Volume 15 (2009),
  // Number 6, November/December 2009. pp. 1291-1298.
  // https://www.inf.ufrgs.br/~oliveira/pubs_files/CVD_Simulation/CVD_Simulation.html
  // ****** THIS IS THE FILTERS USED BY GOOGLE CHROME DEV TOOLS ******
  deuteranopia: {
    html: `
        <svg viewBox="0 0 600 400" width="0" height="0" xmlns:xlink="http://www.w3.org/1999/xlink">
          <filter id="deuteranopia">
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="0.367  0.861 -0.228  0.000  0.000
                        0.280  0.673  0.047  0.000  0.000
                        -0.012  0.043  0.969  0.000  0.000
                        0.000  0.000  0.000  1.000  0.000"/>
              </feColorMatrix>
      </filter>
        </svg>`,
    css: `
        * {
          filter: url(#deuteranopia);
        }`,
    name: 'deuteranopia',
    description: 'Deuteranopia (green-blind)',
  },
  protanopia: {
    html: `
        <svg viewBox="0 0 600 400" width="0" height="0" xmlns:xlink="http://www.w3.org/1999/xlink">
          <filter id="protanopia">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="0.152  1.053 -0.205  0.000  0.000
                      0.115  0.786  0.099  0.000  0.000
                      -0.004 -0.048  1.052  0.000  0.000
                      0.000  0.000  0.000  1.000  0.000"/>
          </filter>
        </svg>`,
    css: `
        * {
          filter: url(#protanopia);
        }`,
    name: 'protanopia',
    description: 'Protanopia (red-blind)',
  },
  tritanopia: {
    html: `
        <svg viewBox="0 0 600 400" width="0" height="0" xmlns:xlink="http://www.w3.org/1999/xlink">
          <filter id="tritanopia">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1.256 -0.077 -0.179  0.000  0.000
                      -0.078  0.931  0.148  0.000  0.000
                      0.005  0.691  0.304  0.000  0.000
                      0.000  0.000  0.000  1.000  0.000"/>
          </filter>
        </svg>`,
    css: `
        * {
          filter: url(#tritanopia);
        }`,
    name: 'tritanopia',
    description: 'Tritanopia (blue-blind)',
  },
  removeFilter: {
    html: '',
    css: '',
    name: 'removeFilter',
    description: 'Remove filter',
  },
}
