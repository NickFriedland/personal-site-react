import React, { Component } from 'react';
import nick from './images/nick.jpg';
import './About.css';
// import styled from 'styled-components';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="container">
          <h1>Hi! I'm Nick.</h1>
          <div className="row">
            <div className="col-3">
              <img className="headshot" src={nick} alt="nick" />
            </div>
            <div className="col-9">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempor a enim vel interdum. Morbi mollis magna enim, tempor
                imperdiet odio iaculis sit amet. Proin commodo interdum nunc nec
                pharetra. Ut et ornare mauris. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Praesent
                efficitur, felis sed tincidunt tincidunt, est enim viverra leo,
                sit amet luctus ante odio pellentesque erat. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Vivamus pulvinar ex quis purus aliquam, ut feugiat ipsum
                mattis. Maecenas sed metus quis neque lobortis gravida. Aenean
                accumsan eros quis nulla feugiat mollis. Maecenas congue
                malesuada feugiat. Donec semper, dolor pretium aliquam
                pellentesque, turpis ante eleifend augue, sed vestibulum neque
                sapien non risus. Ut lacinia dignissim suscipit. Etiam
                ullamcorper tortor augue, vitae mattis libero finibus sit amet.
                Nam in vestibulum dui, quis maximus justo. Morbi ultricies
                molestie lorem, sed blandit metus condimentum nec.
              </p>
              <br />
              <p>
                Integer enim metus, porttitor sit amet mattis in, scelerisque
                non magna. Pellentesque quam ante, auctor at auctor eget, semper
                sed metus. Cras fringilla metus mauris, nec aliquet ligula
                consequat ac. Duis nec nunc non tellus fringilla luctus vel ac
                enim. Praesent vel tristique metus. Quisque et accumsan tellus,
                at vehicula dolor. Maecenas a est finibus, sollicitudin leo sit
                amet, laoreet elit. Maecenas scelerisque mi a velit
                pellentesque, et commodo sapien mollis. Curabitur egestas vel
                purus eu posuere. Sed vulputate eu lorem et blandit. Etiam elit
                metus, facilisis a dignissim sed, ullamcorper quis libero. In
                fringilla enim vel nisl sagittis, ut aliquet ex congue. In odio
                massa, semper sit amet interdum quis, pharetra vitae lorem. Sed
                pulvinar orci vel ante vestibulum, ac auctor erat vulputate.
                Vivamus felis eros, tempor eu orci sed, consectetur ultricies
                risus. Cras vitae purus euismod, mattis erat quis, tincidunt
                velit. Fusce viverra semper dui eu iaculis. Vivamus rutrum est
                et mauris tincidunt, luctus laoreet quam blandit. Nullam laoreet
                sagittis augue, vel volutpat quam rhoncus ut. Vestibulum et
                tortor nec nisl hendrerit porttitor et non libero.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  state = {};
}

About.propTypes = {};

About.defaultProps = {};

export default About;
