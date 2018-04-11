$(document).ready(function(){

  /*************************************************************************
  * Add CAN-166: Add warning to SpeedGrader about multiple graders working at same time *
  **************************************************************************/
if (window.location.href.indexOf("speed_grader") > -1) {
  var displayMessage = '<div class="ic-flash-error" style="top:20px" id="speedgrader-warning"><div class="ic-flash__icon" aria-hidden="true"><i class="icon-warning"></i></div><b>AVOID DATA LOSS</b>: Multiple graders should not grade the same assignment at the same time.<br /><br /><a href="https://canvashelp.stanford.edu/hc/en-us/articles/115007357988-Warning-about-multiple-graders-using-SpeedGrader">Click here to learn more about avoiding data loss.</a><br /><br /><a href="javascript:void(0);" id="xModalNoShow">Don\'t show this message again in this course.</a><button type="button" class="Button Button--icon-action close_link" onClick="javascript:$(\'#speedgrader-warning\').hide();"><i class="icon-x" aria-hidden="true"></i><span class="screenreader-only">Close</span></button></div>';

  //Check cookie exists
  if ($.cookie('xSpeedGModal') != null) {
    //Cookie exists, read it

    //Set array
    var cIds = JSON.parse($.cookie('xSpeedGModal'));

    //Check current course against the array of courses
    if($.inArray(ENV["course_id"],cIds) < 0) {
      $('#flash_message_holder').prepend(displayMessage);
    }
  } else {
    //Cookie doesnt exist, show message
    $('#flash_message_holder').prepend(displayMessage);
  }

  //Write to cookie
  $('#xModalNoShow').on('click', function () {
    if ($.cookie('xSpeedGModal') == null) {
      //Set cookie
      var cIds = [ENV["course_id"]];

      //$.cookie('xSpeedGModal', JSON.stringify(cIds));
      $.cookie('xSpeedGModal', JSON.stringify(cIds), { path: '/', expires: 365 });
    } else {
      //append to arr and reset cookie
      var cIds = JSON.parse($.cookie('xSpeedGModal'));

      cIds.push(ENV["course_id"]);

      //$.cookie('xSpeedGModal', JSON.stringify(cIds));
      $.cookie('xSpeedGModal', JSON.stringify(cIds), { path: '/', expires: 365 });
    }

    $('#speedgrader-warning').hide();
  });
}

//End CAN-166

/*************************************************************************
* CAN-201 Add Course Unpublished warning to home page
**************************************************************************/

if ($(".ui-button.disabled.btn-unpublish").length == 1) {
  $('#content-wrapper').prepend('<div align="center" style="margin-bottom:10px; background-color:#edd; border:2px solid #a44; border-radius:5px; padding:5px;">  \
  <p>This course is not published. Students cannot access the course and notifications will not be sent.</p>  \
  <div align="center" > \
  <form action=""> \
  <input type="button" class="btn" id="stanford_home_warning_publish" value="Publish Course"> \
  </form> \
  </div></div>');
}
else {
  // do nothing
}

$("#stanford_home_warning_publish").click(function(){
    $('#course_status_form').find(":submit").click()
});

/*************************************************************************
 * CAN-202 Add warning in Announcements about lack of notifications for unpublished course
 **************************************************************************/

 if ($(".announcements.active").length ==1) {
    var url = "https://" + window.location.host + "/api/v1/courses/" + ENV["COURSE_ID"];
    var homeurl = "https://" + window.location.host + "/courses/" + ENV["COURSE_ID"];
    $.ajax (url, {
      statusCode: {
        // status will be 200 if the namespace custom data does exist
        200: function(response) {
          console.log("200");
          console.log(response);
          if (response.workflow_state == "unpublished" ) { //checks to make sure that the data value is indeed true
            $('#content-wrapper').prepend('<div align="center" style="margin-bottom:10px; background-color:#edd; border:2px solid #a44; border-radius:5px; padding:5px;">  \
            <p>Notifications will not be sent for any announcements posted before the course is published.</p> \
            <div align="center"> \
            <form action=""> \
            <input type="button" class="btn" id="stanford_annc_warning_publish" value="Publish Course">  \
            </form> \
            </div> \
            </div>');

            $("#stanford_annc_warning_publish").click(function(){
              var publishurl = "https://" + window.location.host + "/api/v1/courses/" + ENV["COURSE_ID"];

              $.ajax ({
                url:publishurl,
                type: "PUT",
                data: "course[event]=offer",
                statusCode: {
                  200: function(response) {
                    location.reload();
                  }
                }
              });
            });
          }
          else {
            // to nothing
          }
        }
      }
    });
  }

//End CAN-201/202

  /*************************************************************************
  * Add SYL-18 Add text about Upload a File, on Edit Syllabus Page. *
  * Updated for SYL-97
  **************************************************************************/

  $('.edit_syllabus_link').click(function () {
    if ($('#stanford-syl-18').length) {
      // do nothing
    }
    else {
      $('#edit_course_syllabus_form').prepend('<div id="stanford-syl-18" style="background-color: #f5f5f5; border: 1px solid #A5AFB5; padding: 1px 5px 1px 10px; margin-bottom:10px;"><p>To upload a syllabus file,  click the <strong>Files</strong> tab on the right sidebar. Then, click <strong>Upload a new file</strong>.<br> When updating syllabus content, don&#39;t forget to click the <strong>Update Syllabus</strong> button.</p></div>');
    }
  });

  //end SYL-18 , SYL-97

  /*************************************************************************
  * Add SYL-16 Change text on Canvas Syllabus screen *
  **************************************************************************/
  var syllabusTag = document.getElementById("course_syllabus_details");
      if (syllabusTag) {
      syllabusTag.innerHTML = '<p>Click <strong>Edit</strong> to post your course syllabus. You can upload a file or add content inline.</p>';
      syllabusTag.innerHTML += '<p>Content posted to the Canvas Syllabus text editor will be made available at <a href="http://syllabus.stanford.edu">http://syllabus.stanford.edu</a>. This will happen even if your Canvas site is <strong>unpublished</strong> or if your course has <strong>concluded</strong>. Additionally, content added to the Canvas Syllabus text editor, including <strong>files</strong>, will be made available to anyone at Stanford by default. </p>';
      syllabusTag.innerHTML += '<p>To make syllabus content accessible to only members of your course, go to Settings located at the bottom of the course navigation bar. On the Course Details tab, scroll down to Visibility, then select <strong>Course</strong> for Syllabus. Click <strong>Update Course Details</strong> when done.</p>'; }

   //end SYL-16

    /***********************************
    * CAN-155 - Add People Customization *
    * Update for CAN-183
    ***********************************/


  function _nextButton(e) {
    setTimeout(function(){
    //alert("click happens");
    var src = e.target || e.srcElement;

    if (src && src.id == 'addUsers' && src.getAttribute('title') == 'Add People') {
      //alert ("clicked on " + src.id);
      e.preventDefault();
      var addpeople = document.getElementsByClassName('addpeople__peoplesearch');
      if (addpeople) {
        var span = addpeople[0].getElementsByTagName('span');
        if (span.length > 0) {
          span[2].innerHTML = '<p><b>Who can be added to this site?</b> Anyone with a SUNet ID or Stanford Canvas guest account. To request a guest account, read our <a href=https://stanfordcanvas.zendesk.com/hc/en-us/articles/227082528-Stanford-Canvas-Guest-Accounts>guest account policy</a> for details on making a request.</p><p><b>To add people to this site,</b> type or paste their SUNet IDs or email addresses, separated by commas.</p>';
        }
         var fieldsets = addpeople[0].getElementsByTagName('fieldset');
        if (fieldsets.length > 1) {
          fieldsets[0].getElementsByTagName('label') [2].style.display = 'none'
          document.getElementById('peoplesearch_radio_unique_id').parentNode.childNodes[1].childNodes[1].innerHTML = 'SUNet ID';
          fieldsets[1].getElementsByTagName('div') [0].style.display = 'none';
        }
      }

      $('.peoplesearch__instructions').hide();
    }
    }, 100);
}

   document.addEventListener('click', _nextButton);

  });

    /***********************************
    * end of Add People Customization *
    ***********************************/

/* GSB Tier 1 Support Detector */
(function() {
  var namespace = 'stanford_gsb';
  var data = 'true';
  var url = "https://" + window.location.host + "/api/v1/users/self/custom_data/support/tier_1?ns=" + namespace;
  $.ajax (url, {
    statusCode: {
        // status will be 200 if the namespace custom data does exist
        200: function(response) {
          if ($(response.data == true )) { //checks to make sure that the data value is indeed true
            $('.ic-app-header__main-navigation a#global_nav_help_link').click(function(){
              //working as of 08/19/2016
              function onElementRendered(selector, cb, _attempts) {
                var el = $(selector);
                _attempts = ++_attempts || 1;
                if (el.length) return cb(el);
                if (_attempts == 60) return;
                setTimeout(function() {
                  onElementRendered(selector, cb, _attempts);
                }, 250);
              };
              onElementRendered('#help_tray', function(e) {
                // checks to see if the elements are on the page, if they are it skips adding them again.
                if ($('#tier_1_phone').length > 0 || $('#tier_1_chat').length > 0 || $('#tier_1_web_form').length > 0) {
                  return null;
                }
                else {
                  $('._1dyDTaI a[href="https://community.canvaslms.com/community/answers"]').parent().hide(); //remove Stanford ask community help option
                  $('._1dyDTaI a[href="https://community.canvaslms.com/community/answers"]').parent().next().hide(); 
                  $('._1dyDTaI a[href="https://community.canvaslms.com/community/ideas/feature-ideas"]').parent().hide(); //remove Stanford request feature option
                  $('._1dyDTaI a[href="https://community.canvaslms.com/community/ideas/feature-ideas"]').parent().next().hide();
                  $('._1dyDTaI a[href="#teacher_feedback"]').parent().hide(); //remove Stanford request help from teacher option
                  $('._1dyDTaI a[href="#teacher_feedback"]').parent().next().hide();
                  $('._1dyDTaI a[href="#create_ticket"]').parent().hide(); //remove Stanford VPTL report a problem option
                  $('._1dyDTaI a[href="#create_ticket"]').parent().next().hide();

                  var web_form_text = "<span id='tier_1_web_form' class='text'>Report a Problem to Canvas Support</span>"
                  var web_form_subtext = "<span id='tier_1_subtext' class='subtext'>If Canvas misbehaves, tell us about it</span>"

                  $('#help_tray ._2j92CzO ').append("<li class='ic-NavMenu-list-item'><a class='ic-NavMenu-list-item__link'>" +
                  web_form_text + "</a>" + "<br>" + "<div class='ic-NavMenu-list-item__helper-text is-help-link'>" +
                  web_form_subtext + "</div></li>");

                  if (ENV.current_user_roles.indexOf('admin') > 0) {
                    $('._1dyDTaI a[href="#create_ticket"]').parent().show(); //reveal Stanford VPTL report a problem option
                  }

                  if (ENV.current_user_roles.indexOf('teacher') > 0) {

                    var phone_text = "<span id='tier_1_phone' class='text'>Canvas Support Hotline</span>"
                    var phone_subtext = "<span id='tier_1_subtext' class='subtext'>Toll free: 833-296-0056</span>"  // Faculty-staff specific contact

                    var chat_text = "<span id='tier_1_chat' class='text'>Chat with Canvas Support</span>"
                    var chat_subtext = "<span id='tier_1_subtext' class='subtext'>Live Chat with Canvas Support</span>"
                    var chat_link = "https://cases.canvaslms.com/liveagentchat?chattype=admin" // Faculty-staff specific contact

                    $('#help_tray ._2j92CzO ').append("<li class='ic-NavMenu-list-item'><a href='"+ chat_link + "' target='_blank' class='ic-NavMenu-list-item__link'>" +
                    chat_text + "</a>" + "<br>" + "<div class='ic-NavMenu-list-item__helper-text is-help-link'>" +
                    chat_subtext + "</div></li>");

                    $('#help_tray ._2j92CzO ').append("<li class='ic-NavMenu-list-item'><a class='ic-NavMenu-list-item__link'>" +
                    phone_text + "</a>" + "<br>" + "<div class='ic-NavMenu-list-item__helper-text is-help-link'>" +
                    phone_subtext + "</div></li>");
                  }

                  else if (ENV.current_user_roles.indexOf('student') > 0) {

                    var phone_text = "<span id='tier_1_phone' class='text'>Canvas Support Hotline</span>"
                    var phone_subtext = "<span id='tier_1_subtext' class='subtext'>Toll free: 844-334-0115</span>" // Student specific contact

                    var chat_text = "<span id='tier_1_chat' class='text'>Chat with Canvas Support</span>"
                    var chat_subtext = "<span id='tier_1_subtext' class='subtext'>Live Chat with Canvas Support</span>"
                    var chat_link = "https://cases.canvaslms.com/liveagentchat?chattype=student" // Student specific contact

                    $('#help_tray .ic-NavMenu-list-item ').append("<li class='ic-NavMenu-list-item'><a href='"+ chat_link + "' target='_blank' class='ic-NavMenu-list-item__link'>" +
                    chat_text + "</a>" + "<br>" + "<div class='ic-NavMenu-list-item__helper-text is-help-link'>" +
                    chat_subtext + "</div></li>");

                    $('#help_tray ._2j92CzO ').append("<li class='ic-NavMenu-list-item'><a class='ic-NavMenu-list-item__link'>" +
                    phone_text + "</a>" + "<br>" + "<div class='ic-NavMenu-list-item__helper-text is-help-link'>" +
                    phone_subtext + "</div></li>");
                  }

                  else {
                    console.log('Unexpected Canvas role')

                  }

                  // have some type of required fields
                  //old sf url = https://www.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8
                  //new sf url = https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8
                    var div = function(body) { return "<div id='tier_1_web_form_modal' style='overflow:hidden' title='Report a Problem to Canvas Support'>" + body + "</div>" }
                    var content = "<form style='text-align:left' action='https://www.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8' method='POST'>";
                        content += "<input type=hidden name='orgid' value='00DA0000000Ibsk'>";
                        //return_url = location.origin + location.pathname;
                        content += "<fieldset class='ic-Form-group ic-HelpDialog__form-fieldset'>";
                        content += "<legend class='ic-HelpDialog__form-legend'>File a ticket for a personal response from our support team.</legend>";
                        content += "<p>For an instant answer, see if your issue is addressed in the <a target='_blank' href='https://community.canvaslms.com/community/answers/guides'>Canvas Guides</a>.</p>";
                        //content += "<input type=hidden name='retURL' value='" + return_url + "'>";
                        content += "<label for='name' class='ic-Form-control'><span class='ic-Label'>Contact Name</span><input class='ic-Input' id='name' maxlength='80' name='name' size='20' type='text' title='Contact Name' required='true' readonly /></label>";
                        //ENV.current_user.display_name
                        content += "<label for='email' class='ic-Form-control'><span class='ic-Label'>Stanford Email:</span><input class='ic-Input' id='email' maxlength='80' name='email' size='20' type='text' title='Email' required='true' /></label>";

                        content += "<label for='subject' class='ic-Form-control'><span class='ic-Label'>Subject</span><input class='ic-Input' id='subject' maxlength='80' name='subject' size='20' type='text' title='Subject' required='true' /></label>";

                        content += "<label for='description' class='ic-Form-control' ><span class='ic-Label'>Description</span><textarea class='ic-Input' name='description' title='Description' style='height:150px; max-height:265px;' required='true' ></textarea><span class='ic-Form-help-text'>Include a link to a screencast/screenshot using something like <a target='_blank' href='http://www.techsmith.com/download/jing'>Jing</a>.</span></label>";

                        content += "<label for='00NA000000Aq5fU'>User Perceived Severity:<select class='ic-Input' id='00NA000000Aq5fU' name='00NA000000Aq5fU' title='User Perceived Severity'>\
                                    <option value=''>Please select one</option>\
                                    <option value='just_a_comment'>Just a casual question, comment, idea, or suggestion</option>\
                                    <option value='not_urgent'>I need some help, but it is not urgent</option>\
                                    <option value='workaround_possible'>Something is broken, but I can work around it for now</option>\
                                    <option value='blocks_what_i_need_to_do'>I cannot get things done until I hear back from you</option>\
                                    <option value='extreme_critical_emergency'>EXTREME CRITICAL EMERGENCY!</option>\
                                    </select></label>";

                        content += "<input id='00NA000000Aq5ej' maxlength='255' name='00NA000000Aq5ej' size='20' type='hidden' label='Canvas Account ID'/>";
                        content += "<input id='00NA000000Aq5em' maxlength='255' name='00NA000000Aq5em' size='20' type='hidden' label='Canvas URL'/>";
                        //location.href
                        content += "<textarea id='00NA000000Aq5ez' name='00NA000000Aq5ez' rows='4' type='hidden' wrap='soft' label='HTTP Environment' style='display:none'></textarea>";
                        //navigator.userAgent
                        content += "<input id='00NA000000Aq5fA' maxlength='60' name='00NA000000Aq5fA' size='20' type='hidden' label='Request Context ID'/>";
                        content += "<input id='00NA000000Aq5fC' maxlength='255' name='00NA000000Aq5fC' size='20' type='hidden' label='Root URL'/>";
                        //location.host
                        content += "<textarea id='00NA000000Aq5fS' name='00NA000000Aq5fS' rows='2' type='text' wrap='soft' label='URL' style='display:none'></textarea>";
                        //location.href
                        content += "<input id='00NA000000Aq5fT' maxlength='26' name='00NA000000Aq5fT' size='20' type='hidden' label='User ID'/>";
                        //ENV.current_user_id
                        content += "<input id='00NA000000Aq5fX' maxlength='100' name='00NA000000Aq5fX' size='20' type='hidden' label='Requester Name'/>";
                        //ENV.current_user.display_name
                        content += "<input id='00NA000000Aq9cN' maxlength='255' name='00NA000000Aq9cN' size='20' type='hidden' label='Become User URL'/>";
                        //location.href + "?become_user_id=" + ENV.current_user_id
                        content += "<input id='00NA000000AqBeG' maxlength='18' name='00NA000000AqBeG' size='20' type='hidden' label='Canvas Sub-Account Id'/>"
                        content += "<input id='00NA000000AqXl5' maxlength='80' name='00NA000000AqXl5' size='20' type='hidden' label='CC_1'/>";
                        //content += "<input type='submit' name='submit'>";
                        content += "<div class='ic-HelpDialog__form-actions'><button id='tier_1_cancel_button' type='button' class='Button'>Cancel</button><span>&nbsp;</span><button type='submit' class='Button Button--primary'>Submit Ticket</button></div>";
                        content += "</fieldset></form>";
                    // console.log("Adding Click Handler!");
                    $("#help_tray").children('ul').children('li').children('a').children('#tier_1_web_form').click(function(){
                      $('ul._2j92CzO').hide();
                      $('._2j92CzO').after(div(content));
                      //need to close the previous modal box

                      //prepopulate specific values
                      $('input[id=name]').val(ENV.current_user.display_name);
                      $('input[id=00NA000000Aq5em]').val(location.href);
                      $('textarea[id=00NA000000Aq5ez]').val(navigator.userAgent);
                      $('input[id=00NA000000Aq5fC]').val(location.host);
                      $('textarea[id=00NA000000Aq5fS]').val(location.href);
                      $('input[id=00NA000000Aq5fT]').val(ENV.current_user_id);
                      $('input[id=00NA000000Aq5fX]').val(ENV.current_user.display_name);
                      $('input[id=00NA000000Aq9cN]').val(location.href + "?become_user_id=" + ENV.current_user_id);
                      //clicking cancel removes the form and adds the link list back in.
                      $('.ic-HelpDialog__form-actions #tier_1_cancel_button').click(function() {
                        $('ul._2j92CzO').show();
                        $('div#tier_1_web_form_modal').hide();
                      });
                    });
                  //------------------------------
                }
              });
            });
          }
        },
      }
    });
})();
